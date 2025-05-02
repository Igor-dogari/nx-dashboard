import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicUploadExampleComponent } from '../_examples/basic-upload-example/basic-upload-example.component';
import { UploadAreaExampleComponent } from '../_examples/upload-area-example/upload-area-example.component';
import { FileListExampleComponent } from '../_examples/file-list-example/file-list-example.component';
import { FileGridExampleComponent } from '../_examples/file-grid-example/file-grid-example.component';
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
