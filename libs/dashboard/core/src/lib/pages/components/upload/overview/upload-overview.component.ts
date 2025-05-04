import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicUploadExampleComponent } from '@core';
import { UploadAreaExampleComponent } from '@core';
import { FileListExampleComponent } from '@core';
import { FileGridExampleComponent } from '@core';
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
