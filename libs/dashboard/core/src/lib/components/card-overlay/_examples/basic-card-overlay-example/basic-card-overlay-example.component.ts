import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import {
  CardOverlayComponent,
} from '@core/components';
import { CardOverlayContainerDirective } from '@core/directives';
import { AvatarComponent } from '@core/components';

@Component({
  selector: 'app-basic-card-overlay-example',
  imports: [
    MatCard,
    MatCardContent,
    CardOverlayComponent,
    MatButton,
    AvatarComponent,
    MatCardActions,
    MatCardAvatar,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    CardOverlayContainerDirective,
  ],
  templateUrl: './basic-card-overlay-example.component.html',
  styleUrl: './basic-card-overlay-example.component.scss',
})
export class BasicCardOverlayExampleComponent {}
