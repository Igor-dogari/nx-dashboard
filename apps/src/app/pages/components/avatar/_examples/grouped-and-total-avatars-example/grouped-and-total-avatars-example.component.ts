import { Component } from '@angular/core';
import {
  AvatarComponent,
  AvatarGroupComponent,
  AvatarTotalComponent,
} from 'core';

@Component({
  selector: 'app-grouped-and-total-avatars-example',
  templateUrl: './grouped-and-total-avatars-example.component.html',
  imports: [AvatarComponent, AvatarTotalComponent, AvatarGroupComponent],
  styleUrl: './grouped-and-total-avatars-example.component.scss',
})
export class GroupedAndTotalAvatarsExampleComponent {}
