import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { DicebearComponent } from '../../../avatar/dicebear/dicebear.component';
import { HorizontalDividerComponent } from '../../../divider/horizontal-divider/horizontal-divider.component';

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
