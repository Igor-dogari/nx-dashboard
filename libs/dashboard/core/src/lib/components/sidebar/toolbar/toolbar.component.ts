import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import {
  HorizontalDividerComponent,
} from '@core/components';
import { DicebearComponent } from '@core/components';

@Component({
  selector: 'emr-sidebar-toolbar',
  imports: [
    MatBadge,
    MatIcon,
    MatIconButton,
    MatTooltip,
    DicebearComponent,
    HorizontalDividerComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  standalone: true,
})
export class ToolbarComponent {
  subscription = 'Free';
  email = 'elementarlabs@gmail.com';
  name = 'Igor Dogari';
}
