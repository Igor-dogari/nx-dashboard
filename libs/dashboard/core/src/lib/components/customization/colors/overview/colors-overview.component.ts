import { Component } from '@angular/core';
import {
  ErrorColorsExampleComponent,
  InverseColorsExampleComponent,
  NeutralColorsExampleComponent,
  NeutralVariantColorsExampleComponent, OtherColorsExampleComponent,
  OutlineColorsExampleComponent, PageComponent,
  PlaygroundComponent,
  PrimaryColorsExampleComponent,
  SecondaryColorsExampleComponent,
  SurfaceColorsExampleComponent,
  TertiaryColorsExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
