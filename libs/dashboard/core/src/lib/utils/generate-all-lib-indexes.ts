// import { readdirSync, statSync, writeFileSync, existsSync } from 'fs';
// import { dirname, join, relative, resolve } from 'path';
//
// function findWorkspaceRoot(startPath: string): string {
//   let current = resolve(startPath);
//
//   while (current !== dirname(current)) {
//     if (
//       existsSync(join(current, 'workspace.json')) ||
//       existsSync(join(current, 'nx.json'))
//     ) {
//       return current;
//     }
//     current = dirname(current);
//   }
//
//   console.error(
//     '❌ Could not find workspace.json or nx.json. Are you inside an Nx workspace?',
//   );
//   process.exit(1);
// }
//
// function findAllLibs(basePath: string): string[] {
//   const libsPath = join(basePath, 'libs');
//   const libs: string[] = [];
//
//   if (!existsSync(libsPath)) {
//     console.error(`❌ libs/ folder not found at ${libsPath}`);
//     process.exit(1);
//   }
//
//   const walk = (dir: string) => {
//     const entries = readdirSync(dir);
//
//     for (const entry of entries) {
//       const entryPath = join(dir, entry);
//       const stat = statSync(entryPath);
//
//       if (stat.isDirectory()) {
//         if (existsSync(join(entryPath, 'project.json'))) {
//           libs.push(entryPath);
//         } else {
//           walk(entryPath); // recurse deeper
//         }
//       }
//     }
//   };
//
//   walk(libsPath);
//
//   return libs;
// }
//
// function findFilesRecursively(dir: string, fileList: string[] = []): string[] {
//   const files = readdirSync(dir);
//
//   for (const file of files) {
//     const filePath = join(dir, file);
//     const stat = statSync(filePath);
//
//     if (stat.isDirectory()) {
//       findFilesRecursively(filePath, fileList);
//     } else if (
//       file.endsWith('.ts') &&
//       !file.endsWith('.spec.ts') &&
//       !file.endsWith('.stories.ts')
//     ) {
//       fileList.push(filePath);
//     }
//   }
//
//   return fileList;
// }
//
// function generateExports(projectRoot: string): void {
//   const libFolder = join(projectRoot, 'src', 'lib');
//   const outputFile = join(projectRoot, 'src', 'index.ts');
//
//   if (!existsSync(libFolder)) {
//     console.warn(`⚠️ Skipping: No lib folder in ${projectRoot}`);
//     return;
//   }
//
//   const files = findFilesRecursively(libFolder);
//
//   if (files.length === 0) {
//     console.warn(
//       `⚠️ Skipping: No components or services found in ${projectRoot}`,
//     );
//     return;
//   }
//
//   const exports = files
//     .map((file) => {
//       const relativePath = relative(join(projectRoot, 'src'), file);
//       const withoutExtension = relativePath.replace(/\.ts$/, '');
//       return `export * from './${withoutExtension.replace(/\\/g, '/')}';`;
//     })
//     .sort();
//
//   writeFileSync(outputFile, exports.join('\n') + '\n', { encoding: 'utf8' });
//
//   console.log(`✅ Generated ${files.length} exports for ${projectRoot}`);
// }
//
// function main(): void {
//   const workspaceRoot = findWorkspaceRoot(__dirname);
//   const libs = findAllLibs(workspaceRoot);
//
//   if (libs.length === 0) {
//     console.error('❌ No libs found.');
//     process.exit(1);
//   }
//
//   console.log(`🔎 Found ${libs.length} libs. Generating indexes...`);
//
//   libs.forEach((lib) => {
//     generateExports(lib);
//   });
//
//   console.log('🚀 Done!');
// }
//
// main();
