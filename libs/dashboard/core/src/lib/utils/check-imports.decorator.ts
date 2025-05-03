import { isDevMode } from '@angular/core';

export function CheckImports(): ClassDecorator {
  return function (target: any) {
    if (isDevMode()) return; // ✅ Skip in dev

    const cmp = (Reflect as any).getMetadata('annotations', target)?.[0];

    if (cmp?.imports && Array.isArray(cmp.imports)) {
      const undefinedImports = cmp.imports
        .map((imp: any, i: number) => ({
          name: imp?.name || `#${i}`,
          ref: imp,
        }))
        .filter((imp: any) => imp.ref === undefined);

      if (undefinedImports.length) {
        console.warn(`❌ [${target.name}] Undefined component imports:`);
        undefinedImports.forEach((imp: any) => console.warn(`  - ${imp.name}`));
      }
    }
  };
}
