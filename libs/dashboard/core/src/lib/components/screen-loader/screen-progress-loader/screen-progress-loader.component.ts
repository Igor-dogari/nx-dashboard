import { booleanAttribute, Component, input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'emr-screen-loader',
  exportAs: 'emrScreenLoader',
  imports: [MatProgressBar],
  templateUrl: './screen-progress-loader.component.html',
  styleUrl: './screen-progress-loader.component.scss',
  standalone: true,
  host: {
    class: 'emr-screen-loader',
    '[class.is-opened]': 'opened()',
  },
})
export class ScreenProgressLoaderComponent {
  opened = input(false, {
    transform: booleanAttribute,
  });
}
