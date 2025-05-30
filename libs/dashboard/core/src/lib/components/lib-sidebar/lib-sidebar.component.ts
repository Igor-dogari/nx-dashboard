import { Component, inject, OnInit, viewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { v7 as uuid } from 'uuid';
import { MatIconButton } from '@angular/material/button';
import {
  SidebarComponent as EmrSidebarComponent,
  SidebarBodyComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  LogoComponent,
  SidebarNavGroupComponent,
  SidebarNavItemComponent,
  SidebarNavHeadingComponent,
  SidebarNavGroupToggleComponent,
  SidebarNavGroupMenuComponent,
  ToolbarComponent,
} from '@core/components';
import {
  SidebarCompactViewModeDirective,
  SidebarFullViewModeDirective, SidebarNavGroupToggleIconDirective,
  SidebarNavItemBadgeDirective, SidebarNavItemIconDirective
} from '@core/directives';
import { OrderByPipe } from '@core/pipes';
import { DicebearComponent } from '@core/components';

@Component({
  selector: 'lib-sidebar',
  imports: [
    MatIcon,
    RouterLink,
    ToolbarComponent,
    EmrSidebarComponent,
    SidebarBodyComponent,
    SidebarCompactViewModeDirective,
    SidebarFullViewModeDirective,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    DicebearComponent,
    MatIconButton,
    LogoComponent,
    SidebarNavGroupComponent,
    SidebarNavItemComponent,
    SidebarNavHeadingComponent,
    SidebarNavItemBadgeDirective,
    SidebarNavGroupToggleIconDirective,
    SidebarNavGroupToggleComponent,
    SidebarNavGroupMenuComponent,
    SidebarNavItemIconDirective,
    OrderByPipe,
  ],
  templateUrl: './lib-sidebar.component.html',
  styleUrl: './lib-sidebar.component.scss',
  host: {
    class: 'sidebar',
    '[class.compact]': 'compact',
  },
  standalone: true,
})
export class LibSidebarComponent implements OnInit {
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';
  compact = false;

  readonly navigation = viewChild.required<any>('navigation');

  navItems: any[] = [
    {
      type: 'group',
      name: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Analytics',
          link: '/pages/dashboard/analytics',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Basic',
          link: '/pages/dashboard/basic',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Ecommerce',
          link: '/pages/dashboard/ecommerce',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Finance',
          link: '/pages/dashboard/finance',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Explore',
          link: '/pages/dashboard/explore',
        },
      ],
    },
    {
      type: 'group',
      name: 'Theme',
      icon: 'tune',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Colors',
          link: '/pages/customization/colors',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Prebuilt Themes',
          link: '/pages/customization/themes',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Typography',
          link: '/pages/customization/typography',
        },
      ],
    },
    {
      type: 'heading',
      name: 'Features',
    },
    {
      key: 'navigation',
      type: 'group',
      icon: 'menu',
      name: 'Navigation',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Navigation',
          link: '/pages/navigation/navigation',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Breadcrumbs',
          link: '/pages/navigation/breadcrumbs',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Tab Panel',
          link: '/pages/navigation/tab-panel',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Rail Navigation',
          link: '/pages/navigation/rail-nav',
        },
      ],
    },
    {
      type: 'group',
      icon: 'dns',
      name: 'Forms',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Autocomplete',
          link: '/pages/forms/autocomplete',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Input',
          link: '/pages/forms/input',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Buttons',
          link: '/pages/forms/buttons',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Password Strength',
          link: '/pages/forms/password-strength',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Slide Toggle',
          link: '/pages/forms/slide-toggle',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Checkbox',
          link: '/pages/forms/checkbox',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Radio',
          link: '/pages/forms/radio',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Select',
          link: '/pages/forms/select',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Segmented',
          link: '/pages/forms/segmented',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Pin Input',
          link: '/pages/forms/pin-input',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Number Input',
          link: '/pages/forms/number-input',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Button Toggle',
          link: '/pages/forms/button-toggle',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Phone Input',
          link: '/pages/forms/phone-input',
        },
      ],
    },
    {
      type: 'group',
      icon: 'grid_view',
      name: 'Components',
      badge: 23,
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Action Required',
          link: '/pages/components/action-required',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Alert',
          link: '/pages/components/alert',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Bottom Sheet',
          link: '/pages/components/bottom-sheet',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Card',
          link: '/pages/components/card',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Card Overlay',
          link: '/pages/components/card-overlay',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Carousel',
          link: '/pages/components/carousel',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Cookie Popup',
          link: '/pages/components/cookie-popup',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Incidents',
          link: '/pages/components/incidents',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Expand',
          link: '/pages/components/expand',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Content Fade',
          link: '/pages/components/content-fade',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Icon',
          link: '/pages/components/icon',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Emoji Picker',
          link: '/pages/components/emoji-picker',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Badge',
          link: '/pages/components/badge',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Avatar',
          link: '/pages/components/avatar',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Block State',
          link: '/pages/components/block-state',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Chips',
          link: '/pages/components/chips',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Datepicker',
          link: '/pages/components/datepicker',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Timepicker',
          link: '/pages/components/timepicker',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Tabs',
          link: '/pages/components/tabs',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Menu',
          link: '/pages/components/menu',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Paginator',
          link: '/pages/components/paginator',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Popover',
          link: '/pages/components/popover',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Tooltip',
          link: '/pages/components/tooltip',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Gauge',
          link: '/pages/components/gauge',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Slider',
          link: '/pages/components/slider',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Table',
          link: '/pages/components/table',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Data View',
          link: '/pages/components/dataview',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Timeline',
          link: '/pages/components/timeline',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Dialog',
          link: '/pages/components/dialog',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Upload',
          link: '/pages/components/upload',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Panel',
          link: '/pages/components/panel',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Resizable Container',
          link: '/pages/components/resizable-container',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Snackbar',
          link: '/pages/components/snackbar',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Command Bar',
          link: '/pages/components/command-bar',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Color Picker',
          link: '/pages/components/color-picker',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Brand Colors',
          link: '/pages/components/brand-colors',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Divider',
          link: '/pages/components/divider',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Skeleton',
          link: '/pages/components/skeleton',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Filter Builder',
          link: '/pages/components/filter-builder',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Expansion Panel',
          link: '/pages/components/expansion-panel',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'List',
          link: '/pages/components/list',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Progress Bar',
          link: '/pages/components/progress-bar',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Progress Spinner',
          link: '/pages/components/progress-spinner',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Stepper',
          link: '/pages/components/stepper',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Toolbar',
          link: '/pages/components/toolbar',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Tree',
          link: '/pages/components/tree',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Layout',
          link: '/pages/components/layout',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Suggestions',
          link: '/pages/components/suggestions',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Announcement',
          link: '/pages/components/announcement',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Marquee',
          link: '/pages/components/marquee',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Sidebar',
          link: '/pages/components/sidebar',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Confirm',
          link: '/pages/components/confirm',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Thumbnail Maker',
          link: '/pages/components/thumbnail-maker',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Image Viewer',
          link: '/pages/components/image-viewer',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Image Resizer',
          link: '/pages/components/image-resizer',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Comment Editor',
          link: '/pages/components/comment-editor',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Text Editor',
          link: '/pages/components/text-editor',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Screen Loader',
          link: '/pages/components/screen-loader',
        },
      ],
    },
    {
      type: 'group',
      icon: 'leaderboard',
      name: 'Micro Charts',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Line Chart',
          link: '/pages/micro-charts/line-chart',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Bar Chart',
          link: '/pages/micro-charts/bar-chart',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Pie Chart',
          link: '/pages/micro-charts/pie-chart',
        },
      ],
    },
    {
      type: 'group',
      icon: 'hard_drive',
      name: 'Store',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Selects',
          link: '/pages/store/selects',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Widgets',
          link: '/pages/store/widgets',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Skeleton',
          link: '/pages/store/skeleton',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Sidebar Widgets',
          link: '/pages/store/sidebar-widgets',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Notifications',
          link: '/pages/store/notifications',
        },
      ],
    },
    {
      type: 'heading',
      name: 'Pages',
    },
    {
      type: 'group',
      icon: 'apps',
      name: 'Applications',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Messenger',
          link: '/pages/applications/messenger',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'File Manager',
          link: '/pages/applications/file-manager',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Kanban Board',
          link: '/pages/applications/kanban-board',
        },
      ],
    },
    {
      type: 'group',
      icon: 'lock',
      name: 'Authentication',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Sign In',
          link: '/auth/sign-in',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Sign Up',
          link: '/auth/signup',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Forgot Password',
          link: '/auth/forgot-password',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Password Reset',
          link: '/auth/password-reset',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Set New Password',
          link: '/auth/set-new-password',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Done',
          link: '/auth/done',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Create Account',
          link: '/auth/create-account',
        },
      ],
    },
    {
      type: 'group',
      name: 'User Profile',
      icon: 'person',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Talent Profile',
          link: '/pages/user-profile/talent-profile',
        },
      ],
    },
    {
      type: 'group',
      name: 'Account',
      icon: 'badge',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Settings',
          link: '/pages/account/settings',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Notifications',
          link: '/pages/account/notifications',
        },
      ],
    },
    {
      type: 'group',
      icon: 'attach_money',
      name: 'Pricing',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Basic',
          link: '/pages/pricing/basic',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Membership Plans',
          link: '/pages/pricing/membership-plans',
        },
      ],
    },
    {
      type: 'group',
      icon: 'edit_note',
      name: 'Content',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Post List',
          link: '/pages/content/posts/list',
        },
      ],
    },
    {
      type: 'group',
      icon: 'error',
      name: 'Error Pages',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Not Found (404)',
          link: '/error/not-found',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Not Found 1 (404)',
          link: '/error/not-found-1',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Server Error (500)',
          link: '/error/internal-server-error',
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Forbidden (401)',
          link: '/error/forbidden',
        },
      ],
    },
    {
      type: 'group',
      icon: 'layers',
      name: 'Service Pages',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Pending Email Activation',
          link: '/pages/service-pages/pending-email-activation',
        },
      ],
    },
  ];
  navItemLinks: any[] = [];
  activeKey: null | string = null;

  ngOnInit() {
    this.navItems.forEach((navItem) => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as any[]);
      }
    });
    this._activateLink();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this._activateLink();
      });
  }

  private _activateLink() {
    const activeLink = this.navItemLinks.find((navItem) => {
      if (navItem.link === this.location.path()) {
        return true;
      }

      if (navItem.type === 'group') {
        return (
          this.location.path() !== '/' &&
          this.location.path().includes(navItem.link as string)
        );
      }

      return false;
    });

    if (activeLink) {
      this.activeKey = activeLink.key;
    } else {
      this.activeKey = null;
    }
  }
}
