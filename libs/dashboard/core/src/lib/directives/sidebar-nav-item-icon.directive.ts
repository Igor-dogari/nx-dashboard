import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[emrSidebarNavItemIcon]',
})
export class SidebarNavItemIconDirective {
  // readonly templateRef = inject(TemplateRef);
}
