import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-core',
  imports: [CommonModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {}
