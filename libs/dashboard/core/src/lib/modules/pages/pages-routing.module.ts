import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@core/components').then(c => c.EmrCommonComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@core/modules').then(m => m.DashboardModule)
      },
      // {
      //   path: 'customization',
      //   loadChildren: () => import('@core/modules').then(m => m.CustomizationModule)
      // },
      // {
      //   path: 'forms/password-strength',
      //   loadChildren: () => import('@core/modules').then(m => m.PasswordStrengthModule)
      // },
      // {
      //   path: 'forms/autocomplete',
      //   loadChildren: () => import('@core/modules').then(m => m.AutocompleteModule)
      // },
      // {
      //   path: 'forms/buttons',
      //   loadChildren: () => import('@core/modules').then(m => m.ButtonsModule)
      // },
      // {
      //   path: 'forms/input',
      //   loadChildren: () => import('@core/modules').then(m => m.InputModule)
      // },
      // {
      //   path: 'forms/phone-input',
      //   loadChildren: () => import('@core/modules').then(m => m.PhoneInputModule)
      // },
      // {
      //   path: 'forms/slide-toggle',
      //   loadChildren: () => import('@core/modules').then(m => m.SlideToggleModule)
      // },
      // {
      //   path: 'forms/checkbox',
      //   loadChildren: () => import('@core/modules').then(m => m.CheckboxModule)
      // },
      // {
      //   path: 'forms/radio',
      //   loadChildren: () => import('@core/modules').then(m => m.RadioModule)
      // },
      // {
      //   path: 'forms/select',
      //   loadChildren: () => import('@core/modules').then(m => m.SelectModule)
      // },
      // {
      //   path: 'forms/segmented',
      //   loadChildren: () => import('@core/modules').then(m => m.SegmentedModule)
      // },
      // {
      //   path: 'forms/pin-input',
      //   loadChildren: () => import('@core/modules').then(m => m.PinInputModule)
      // },
      // {
      //   path: 'forms/button-toggle',
      //   loadChildren: () => import('@core/modules').then(m => m.ButtonToggleModule)
      // },
      // {
      //   path: 'forms/number-input',
      //   loadChildren: () => import('@core/modules').then(m => m.NumberInputModule)
      // },
      // {
      //   path: 'components/cookie-popup',
      //   loadChildren: () => import('@core/modules').then(m => m.CookiePopupModule)
      // },
      // {
      //   path: 'components/action-required',
      //   loadChildren: () => import('@core/modules').then(m => m.ActionRequiredModule)
      // },
      // {
      //   path: 'components/avatar',
      //   loadChildren: () => import('@core/modules').then(m => m.AvatarModule)
      // },
      // {
      //   path: 'components/timeline',
      //   loadChildren: () => import('@core/modules').then(m => m.TimelineModule)
      // },
      // {
      //   path: 'components/badge',
      //   loadChildren: () => import('@core/modules').then(m => m.BadgeModule)
      // },
      // {
      //   path: 'components/sidebar',
      //   loadChildren: () => import('@core/modules').then(m => m.SidebarModule)
      // },
      // {
      //   path: 'components/bottom-sheet',
      //   loadChildren: () => import('@core/modules').then(m => m.BottomSheetModule)
      // },
      // {
      //   path: 'components/card',
      //   loadChildren: () => import('@core/modules').then(m => m.CardModule)
      // },
      // {
      //   path: 'components/card-overlay',
      //   loadChildren: () => import('@core/modules').then(m => m.CardOverlayModule)
      // },
      // {
      //   path: 'components/carousel',
      //   loadChildren: () => import('@core/modules').then(m => m.CarouselModule)
      // },
      // {
      //   path: 'components/chips',
      //   loadChildren: () => import('@core/modules').then(m => m.ChipsModule)
      // },
      // {
      //   path: 'components/chips',
      //   loadChildren: () => import('@core/modules').then(m => m.ChipsModule)
      // },
      // {
      //   path: 'components/emoji-picker',
      //   loadChildren: () => import('@core/modules').then(m => m.EmojiPickerModule)
      // },
      // {
      //   path: 'components/datepicker',
      //   loadChildren: () => import('@core/modules').then(m => m.DatepickerModule)
      // },
      // {
      //   path: 'components/timepicker',
      //   loadChildren: () => import('@core/modules').then(m => m.TimepickerModule)
      // },
      // {
      //   path: 'components/icon',
      //   loadChildren: () => import('@core/modules').then(m => m.IconModule)
      // },
      // {
      //   path: 'components/dialog',
      //   loadChildren: () => import('@core/modules').then(m => m.DialogModule)
      // },
      // {
      //   path: 'components/divider',
      //   loadChildren: () => import('@core/modules').then(m => m.DividerModule)
      // },
      // {
      //   path: 'components/content-fade',
      //   loadChildren: () => import('@core/modules').then(m => m.ContentFadeModule)
      // },
      // {
      //   path: 'components/expansion-panel',
      //   loadChildren: () => import('@core/modules').then(m => m.ExpansionPanelModule)
      // },
      // {
      //   path: 'components/list',
      //   loadChildren: () => import('@core/modules').then(m => m.ListModule)
      // },
      // {
      //   path: 'components/menu',
      //   loadChildren: () => import('@core/modules').then(m => m.MenuModule)
      // },
      // {
      //   path: 'components/paginator',
      //   loadChildren: () => import('@core/modules').then(m => m.PaginatorModule)
      // },
      // {
      //   path: 'components/progress-bar',
      //   loadChildren: () => import('@core/modules').then(m => m.ProgressBarModule)
      // },
      // {
      //   path: 'components/resizable-container',
      //   loadChildren: () => import('@core/modules').then(m => m.ResizableContainerModule)
      // },
      // {
      //   path: 'components/gauge',
      //   loadChildren: () => import('@core/modules').then(m => m.GaugeModule)
      // },
      // {
      //   path: 'components/progress-spinner',
      //   loadChildren: () => import('@core/modules').then(m => m.ProgressSpinnerModule)
      // },
      // {
      //   path: 'components/slider',
      //   loadChildren: () => import('@core/modules').then(m => m.SliderModule)
      // },
      // {
      //   path: 'components/thumbnail-maker',
      //   loadChildren: () => import('@core/modules').then(m => m.ThumbnailMakerModule)
      // },
      // {
      //   path: 'components/expand',
      //   loadChildren: () => import('@core/modules').then(m => m.ExpandModule)
      // },
      // {
      //   path: 'components/snackbar',
      //   loadChildren: () => import('@core/modules').then(m => m.SnackbarModule)
      // },
      // {
      //   path: 'components/comment-editor',
      //   loadChildren: () => import('@core/modules').then(m => m.CommentEditorModule)
      // },
      // {
      //   path: 'components/table',
      //   loadChildren: () => import('@core/modules').then(m => m.TableModule)
      // },
      // {
      //   path: 'components/dataview',
      //   loadChildren: () => import('@core/modules').then(m => m.DataviewModule)
      // },
      // {
      //   path: 'components/stepper',
      //   loadChildren: () => import('@core/modules').then(m => m.StepperModule)
      // },
      // {
      //   path: 'components/tabs',
      //   loadChildren: () => import('@core/modules').then(m => m.TabsModule)
      // },
      // {
      //   path: 'components/toolbar',
      //   loadChildren: () => import('@core/modules').then(m => m.ToolbarModule)
      // },
      // {
      //   path: 'components/tooltip',
      //   loadChildren: () => import('@core/modules').then(m => m.TooltipModule)
      // },
      // {
      //   path: 'components/tree',
      //   loadChildren: () => import('@core/modules').then(m => m.TreeModule)
      // },
      // {
      //   path: 'components/skeleton',
      //   loadChildren: () => import('@core/modules').then(m => m.SkeletonModule)
      // },
      // {
      //   path: 'components/alert',
      //   loadChildren: () => import('@core/modules').then(m => m.AlertModule)
      // },
      // {
      //   path: 'components/popover',
      //   loadChildren: () => import('@core/modules').then(m => m.PopoverModule)
      // },
      // {
      //   path: 'components/color-picker',
      //   loadChildren: () => import('@core/modules').then(m => m.ColorPickerModule)
      // },
      // {
      //   path: 'components/brand-colors',
      //   loadChildren: () => import('@core/modules').then(m => m.BrandColorsModule)
      // },
      // {
      //   path: 'components/upload',
      //   loadChildren: () => import('@core/modules').then(m => m.UploadModule)
      // },
      // {
      //   path: 'components/command-bar',
      //   loadChildren: () => import('@core/modules').then(m => m.CommandBarModule)
      // },
      // {
      //   path: 'components/filter-builder',
      //   loadChildren: () => import('@core/modules').then(m => m.FilterBuilderModule)
      // },
      // {
      //   path: 'components/panel',
      //   loadChildren: () => import('@core/modules').then(m => m.PanelModule)
      // },
      // {
      //   path: 'components/incidents',
      //   loadChildren: () => import('@core/modules').then(m => m.IncidentsModule)
      // },
      // {
      //   path: 'components/layout',
      //   loadChildren: () => import('@core/modules').then(m => m.LayoutModule)
      // },
      // {
      //   path: 'components/suggestions',
      //   loadChildren: () => import('@core/modules').then(m => m.SuggestionsModule)
      // },
      // {
      //   path: 'components/announcement',
      //   loadChildren: () => import('@core/modules').then(m => m.AnnouncementModule)
      // },
      // {
      //   path: 'components/block-state',
      //   loadChildren: () => import('@core/modules').then(m => m.BlockStateModule)
      // },
      // {
      //   path: 'components/confirm',
      //   loadChildren: () => import('@core/modules').then(m => m.ConfirmModule)
      // },
      // {
      //   path: 'components/image-viewer',
      //   loadChildren: () => import('@core/modules').then(m => m.ImageViewerModule)
      // },
      // {
      //   path: 'components/image-resizer',
      //   loadChildren: () => import('@core/modules').then(m => m.ImageResizerModule)
      // },
      // {
      //   path: 'components/marquee',
      //   loadChildren: () => import('@core/modules').then(m => m.MarqueeModule)
      // },
      // {
      //   path: 'components/text-editor',
      //   loadChildren: () => import('@core/modules').then(m => m.TextEditorModule)
      // },
      // {
      //   path: 'components/screen-loader',
      //   loadChildren: () => import('@core/modules').then(m => m.ScreenLoaderModule)
      // },
      // {
      //   path: 'navigation/breadcrumbs',
      //   loadChildren: () => import('@core/modules').then(m => m.BreadcrumbsModule)
      // },
      // {
      //   path: 'navigation/tab-panel',
      //   loadChildren: () => import('@core/modules').then(m => m.TabPanelModule)
      // },
      // {
      //   path: 'navigation/navigation',
      //   loadChildren: () => import('@core/modules').then(m => m.NavigationModule)
      // },
      // {
      //   path: 'navigation/rail-nav',
      //   loadChildren: () => import('@core/modules').then(m => m.RailNavModule)
      // },
      // {
      //   path: 'user-profile',
      //   loadChildren: () => import('@core/modules').then(m => m.UserProfileModule)
      // },
      // {
      //   path: 'account/notifications',
      //   loadComponent: () => import('@core/components').then(m => m.AccountNotificationsComponent)
      // },
      // {
      //   path: 'account/settings',
      //   loadChildren: () => import('@core/modules').then(m => m.SettingsModule)
      // },
      // {
      //   path: 'store',
      //   loadChildren: () => import('@core/modules').then(m => m.StoreModule)
      // },
      // {
      //   path: 'pricing',
      //   loadChildren: () => import('@core/modules').then(m => m.PricingModule)
      // },
      // {
      //   path: 'applications',
      //   loadChildren: () => import('@core/modules').then(m => m.ApplicationsModule)
      // },
      // {
      //   path: 'micro-charts',
      //   loadChildren: () => import('@core/modules').then(m => m.MicroChartsModule)
      // },
      // {
      //   path: 'content',
      //   loadChildren: () => import('@core/modules').then(m => m.ContentModule)
      // },
      // {
      //   path: 'service-pages',
      //   loadChildren: () => import('@core/modules').then(m => m.ServicePagesModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
