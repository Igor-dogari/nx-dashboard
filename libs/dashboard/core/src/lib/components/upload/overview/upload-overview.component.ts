import { Component } from '@angular/core';
import {
  BasicUploadExampleComponent, FileGridExampleComponent,
  FileListExampleComponent, PageComponent,
  PlaygroundComponent,
  UploadAreaExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
