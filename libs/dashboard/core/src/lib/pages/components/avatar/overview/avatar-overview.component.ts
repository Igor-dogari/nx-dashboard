import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicAvatarExampleComponent } from '@core';
import { AvatarSizesExampleComponent } from '@core';
import {
  AvatarWithImagesExampleComponent
} from '@core';
import {
  AvatarWithIconsExampleComponent
} from '@core';
import { GroupedAvatarsExampleComponent } from '@core';
import {
  GroupedAndTotalAvatarsExampleComponent
} from '@core';
import {
  AvatarPresenceIndicatorExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  AvatarAutomaticColorExampleComponent
} from '@core';
import { AvatarDicebearExampleComponent } from '@core';

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
