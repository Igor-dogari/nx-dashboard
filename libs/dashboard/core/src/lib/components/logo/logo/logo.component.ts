import { Component, input } from '@angular/core';
import { LogoAppearance } from '@core/models';


@Component({
  selector: 'emr-logo,[emr-logo]',
  exportAs: 'emrLogo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  standalone: true,
  host: {
    class: 'emr-logo',
    '[class.is-text]': 'appearance() === "text"',
    '[class.is-image]': 'appearance() === "image"',
  },
})
export class LogoComponent {
  appearance = input<LogoAppearance>('text');
}
