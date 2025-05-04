import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { PrimaryColorsExampleComponent } from '@core';
import {
  SecondaryColorsExampleComponent
} from '@core';
import { TertiaryColorsExampleComponent } from '@core';
import { ErrorColorsExampleComponent } from '@core';
import { SurfaceColorsExampleComponent } from '@core';
import { OutlineColorsExampleComponent } from '@core';
import { InverseColorsExampleComponent } from '@core';
import { NeutralColorsExampleComponent } from '@core';
import {
  NeutralVariantColorsExampleComponent
} from '@core';
import { OtherColorsExampleComponent } from '@core';
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
