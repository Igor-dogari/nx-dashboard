import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AnnouncementGlobalComponent,
  IncidentsContainerComponent,
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent,
  LayoutTopbarComponent,
} from '@core';
import { HeaderComponent, LibSidebarComponent } from '@core/pages';
import * as core from '@core/pages';
import * as core1 from '@core';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    LibSidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent,
    IncidentsContainerComponent,
    AnnouncementGlobalComponent,
  ],
  templateUrl: './emr-common.component.html',
  standalone: true,
})
export class EmrCommonComponent {
  constructor() {
    const we = Object.values(core).map((cmp) => {
      const dep = Object.values(cmp)[1]?.dependencies;
      return {
        name: cmp,
        dependencies: dep,
        dev: Object.values(dep || []).filter((dep: any) => (dep as any)?.ɵcmp),
      };
    });
    console.log('=>(emr-common.component.ts:46) we', we);
const coreComponents = we.filter(value => value.dependencies !== undefined);
console.log("=>(emr-common.component.ts:41) coreComponents", coreComponents.length);
    const totalDevTot = we.reduce((sum, item) => sum + (item.dev.length || 0), 0);
    console.log('Total devTot:', totalDevTot);

    // const allComponents = Object.entries(core)
    //   .filter(([, cmp]) => typeof cmp === 'function')
    //   .map(([name, cmp]) => ({ name, cmp }));
    //
    // for (const { name, cmp } of allComponents) {
    //   const meta =
    //     (cmp as any)?.ɵcmp ||
    //     (cmp as any)?.ɵdir ||
    //     (cmp as any)?.ɵpipe ||
    //     (cmp as any)?.ɵmod;
    //
    //   if (!meta?.imports) continue;
    //   // console.log("=>(emr-common.component.ts:39) name", name);
    //
    //   const undefinedImports = meta.imports
    //     .map((imp: any, i: number) => ({
    //       name: imp?.name || `Unknown#${i}`,
    //       ref: imp,
    //     }))
    //     .filter((imp: any) => imp.ref === undefined);
    //
    //   if (undefinedImports.length > 0) {
    //     const list = undefinedImports
    //       .map((u: any) => `  - ${u.name}`)
    //       .join('\n');
    //     console.warn(`⚠️ [${name}] has undefined imports:\n${list}`);
    //   }
    // }
  }
}
