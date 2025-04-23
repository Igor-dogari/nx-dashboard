import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  AvatarComponent,
  AvatarGroupComponent,
  AvatarTotalComponent,
} from '@core';

@Component({
  selector: 'app-avatar-automatic-color-example',
  imports: [
    MatIcon,
    AvatarComponent,
    AvatarTotalComponent,
    AvatarGroupComponent,
  ],
  templateUrl: './avatar-automatic-color-example.component.html',
  styleUrl: './avatar-automatic-color-example.component.scss',
})
export class AvatarAutomaticColorExampleComponent {}
