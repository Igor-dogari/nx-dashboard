import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicAvatarExampleComponent } from '@core/pages';
import { AvatarSizesExampleComponent } from '@core/pages';
import {
  AvatarWithImagesExampleComponent
} from '@core/pages';
import {
  AvatarWithIconsExampleComponent
} from '@core/pages';
import { GroupedAvatarsExampleComponent } from '@core/pages';
import {
  GroupedAndTotalAvatarsExampleComponent
} from '@core/pages';
import {
  AvatarPresenceIndicatorExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  AvatarAutomaticColorExampleComponent
} from '@core/pages';
import { AvatarDicebearExampleComponent } from '@core/pages';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicAvatarExampleComponent,
        AvatarSizesExampleComponent,
        AvatarWithImagesExampleComponent,
        AvatarWithIconsExampleComponent,
        GroupedAvatarsExampleComponent,
        GroupedAndTotalAvatarsExampleComponent,
        AvatarPresenceIndicatorExampleComponent,
        PageComponent,
        PageContentDirective,
        AvatarAutomaticColorExampleComponent,
        AvatarDicebearExampleComponent
    ],
    templateUrl: './avatar-overview.component.html',
    styleUrl: './avatar-overview.component.scss'
})
export class AvatarOverviewComponent {

}
