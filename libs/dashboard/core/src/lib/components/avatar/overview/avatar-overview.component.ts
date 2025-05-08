import { Component } from '@angular/core';
import {
  AvatarAutomaticColorExampleComponent, AvatarDicebearExampleComponent,
  AvatarPresenceIndicatorExampleComponent,
  AvatarSizesExampleComponent, AvatarWithIconsExampleComponent,
  AvatarWithImagesExampleComponent,
  BasicAvatarExampleComponent, GroupedAndTotalAvatarsExampleComponent, GroupedAvatarsExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
