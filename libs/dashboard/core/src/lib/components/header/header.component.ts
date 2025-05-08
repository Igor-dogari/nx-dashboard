import { Component, computed, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';
import { PopoverTriggerForDirective, SoundEffectDirective } from '@core/directives';
import { AssistantSearchComponent, DicebearComponent, NotificationsPopoverComponent } from '@core/components';
import { LayoutApiService, ThemeManagerService } from '@core/services';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatIconButton,
    MatBadge,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    DicebearComponent,
    MatDivider,
    MatButton,
    MatTooltip,
    RouterLink,
    AssistantSearchComponent,
    MatAnchor,
    SoundEffectDirective,
    NotificationsPopoverComponent,
    PopoverTriggerForDirective,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    class: 'block w-full',
  },
  standalone: true,
})
export class HeaderComponent {
  auth = inject(AuthService);

  protected _themeManager = inject(ThemeManagerService);
  private _layoutApi = inject(LayoutApiService);

  constructor() {
    console.log('=>(header.component.ts:58) constructor');
  }

  sidebarShown = computed(() => {
    return this._layoutApi.isSidebarShown('root');
  });

  toggleSidebar(): void {
    if (this.sidebarShown()) {
      this._layoutApi.hideSidebar('root');
    } else {
      this._layoutApi.showSidebar('root');
    }
  }

  protected readonly document = document;
}
