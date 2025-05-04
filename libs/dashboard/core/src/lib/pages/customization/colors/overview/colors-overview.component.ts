import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { PrimaryColorsExampleComponent } from '@core/pages';
import {
  SecondaryColorsExampleComponent
} from '@core/pages';
import { TertiaryColorsExampleComponent } from '@core/pages';
import { ErrorColorsExampleComponent } from '@core/pages';
import { SurfaceColorsExampleComponent } from '@core/pages';
import { OutlineColorsExampleComponent } from '@core/pages';
import { InverseColorsExampleComponent } from '@core/pages';
import { NeutralColorsExampleComponent } from '@core/pages';
import {
  NeutralVariantColorsExampleComponent
} from '@core/pages';
import { OtherColorsExampleComponent } from '@core/pages';
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
