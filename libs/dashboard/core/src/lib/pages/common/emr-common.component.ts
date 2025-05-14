import { Component, inject } from '@angular/core';
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
import { CustomizerComponent } from '../components/customizer/customizer.component';
import { AppSettings } from '../../interfaces/settings.interface';
import { SettingsService } from '../../services/settings.service';

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
    CustomizerComponent,
  ],
  templateUrl: './emr-common.component.html',
  standalone: true,
})
export class EmrCommonComponent {
  private readonly settings = inject(SettingsService);
  private options = this.settings.options;

  updateOptions(options: AppSettings) {
    this.options = options;
    this.settings.setOptions(options);
    this.settings.setDirection();
    this.settings.setTheme();
  }
}
