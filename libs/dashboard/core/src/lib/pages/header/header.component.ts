import { Component, computed, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
  AssistantSearchComponent,
  DicebearComponent,
  LayoutApiService,
  NotificationsPopoverComponent,
  PopoverTriggerForDirective,
  SoundEffectDirective,
  ThemeManagerService,
} from '@core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';

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
export class HeaderComponent implements OnInit {
  auth = inject(AuthService);

  protected _themeManager = inject(ThemeManagerService);
  private _layoutApi = inject(LayoutApiService);

  sidebarShown = computed(() => {
    return this._layoutApi.isSidebarShown('root');
  });

  constructor() {
    console.log("=>(header.component.ts:11) AssistantSearchComponent", AssistantSearchComponent);
    console.log("=>(header.component.ts:13) DicebearComponent", DicebearComponent);
    console.log("=>(header.component.ts:15) LayoutApiService", LayoutApiService);
    console.log("=>(header.component.ts:17) NotificationsPopoverComponent", NotificationsPopoverComponent);
    console.log("=>(header.component.ts:19) PopoverTriggerForDirective", PopoverTriggerForDirective);
    console.log("=>(header.component.ts:21) SoundEffectDirective", SoundEffectDirective);
    console.log("=>(header.component.ts:23) ThemeManagerService", ThemeManagerService);

  }

  ngOnInit(): void {
    console.log("=>(header.component.ts:64) ngOnInit", );
  }

  toggleSidebar(): void {
    if (this.sidebarShown()) {
      this._layoutApi.hideSidebar('root');
    } else {
      this._layoutApi.showSidebar('root');
    }
  }

  protected readonly document = document;
}
