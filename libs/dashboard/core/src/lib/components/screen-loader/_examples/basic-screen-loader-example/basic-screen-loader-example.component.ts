import { Component, signal } from '@angular/core';
import { ScreenProgressLoaderComponent } from '@core/components';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-basic-screen-loader-example',
  imports: [ScreenProgressLoaderComponent, MatButton],
  templateUrl: './basic-screen-loader-example.component.html',
  standalone: true,
  styleUrl: './basic-screen-loader-example.component.scss',
})
export class BasicScreenLoaderExampleComponent {
  opened = signal(false);

  openScreenLoader() {
    this.opened.set(true);
    setTimeout(() => {
      this.opened.set(false);
    }, 5000);
  }
}
