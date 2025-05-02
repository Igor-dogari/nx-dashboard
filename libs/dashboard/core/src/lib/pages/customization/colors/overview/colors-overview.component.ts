import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { PrimaryColorsExampleComponent } from '../_examples/primary-colors-example/primary-colors-example.component';
import {
  SecondaryColorsExampleComponent
} from '../_examples/secondary-colors-example/secondary-colors-example.component';
import { TertiaryColorsExampleComponent } from '../_examples/tertiary-colors-example/tertiary-colors-example.component';
import { ErrorColorsExampleComponent } from '../_examples/error-colors-example/error-colors-example.component';
import { SurfaceColorsExampleComponent } from '../_examples/surface-colors-example/surface-colors-example.component';
import { OutlineColorsExampleComponent } from '../_examples/outline-colors-example/outline-colors-example.component';
import { InverseColorsExampleComponent } from '../_examples/inverse-colors-example/inverse-colors-example.component';
import { NeutralColorsExampleComponent } from '../_examples/neutral-colors-example/neutral-colors-example.component';
import {
  NeutralVariantColorsExampleComponent
} from '../_examples/neutral-variant-colors-example/neutral-variant-colors-example.component';
import { OtherColorsExampleComponent } from '../_examples/other-colors-example/other-colors-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    PrimaryColorsExampleComponent,
    SecondaryColorsExampleComponent,
    TertiaryColorsExampleComponent,
    ErrorColorsExampleComponent,
    SurfaceColorsExampleComponent,
    OutlineColorsExampleComponent,
    InverseColorsExampleComponent,
    NeutralColorsExampleComponent,
    NeutralVariantColorsExampleComponent,
    OtherColorsExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './colors-overview.component.html',
  styleUrl: './colors-overview.component.scss'
})
export class ColorsOverviewComponent {

}
