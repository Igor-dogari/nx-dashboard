import { readdirSync, statSync, writeFileSync, existsSync } from 'fs';
import { join, relative, resolve, dirname } from 'path';

function findNxProjectRoot(startPath: string): string | null {
  let current = resolve(startPath);

  while (current !== dirname(current)) {
    if (existsSync(join(current, 'project.json'))) {
      return current;
    }
    current = dirname(current);
  }

  return null;
}

function findFilesRecursively(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      findFilesRecursively(filePath, fileList);
    } else if (
      (file.endsWith('.component.ts') ||
        file.endsWith('.service.ts') ||
        file.endsWith('.directive.ts') ||
        file.endsWith('.pipe.ts') ||
        file.endsWith('index.ts')) &&
      !file.endsWith('.spec.ts') &&
      !file.endsWith('.stories.ts')
    ) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

function generateExports(projectRoot: string): void {
  const libFolder = join(projectRoot, 'src', 'lib');
  const outputFile = join(projectRoot, 'src', 'index.ts');

  if (!existsSync(libFolder)) {
    console.error(`❌ No lib folder found at ${libFolder}`);
    process.exit(1);
  }

  const files = findFilesRecursively(libFolder);

  const exports = files
    .map((file) => {
      const relativePath = relative(join(projectRoot, 'src'), file);
      return `export * from './${relativePath.replace(/\\/g, '/').replace(/\.ts$/, '')}';`;
    })
    .sort();

  writeFileSync(outputFile, exports.join('\n') + '\n', { encoding: 'utf8' });

  console.log(`✅ Generated ${exports.length} exports into ${outputFile}`);
}

function main(): void {
  const cwd = process.cwd();
  const projectRoot = findNxProjectRoot(cwd);

  if (!projectRoot) {
    console.error(
      '❌ Could not find a project.json — are you inside a lib folder?',
    );
    process.exit(1);
  }

  generateExports(projectRoot);
}

main();
