import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicUploadExampleComponent } from '@core/pages';
import { UploadAreaExampleComponent } from '@core/pages';
import { FileListExampleComponent } from '@core/pages';
import { FileGridExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    imports: [
        PlaygroundComponent,
        BasicUploadExampleComponent,
        UploadAreaExampleComponent,
        FileListExampleComponent,
        FileGridExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './upload-overview.component.html',
    styleUrl: './upload-overview.component.scss'
})
export class UploadOverviewComponent {

}
