import { Component } from '@angular/core';
import { UploadFileSelectedEvent } from '@core/models';
import { JsonPipe } from '@angular/common';
import { UploadAreaComponent } from '@core/components';

@Component({
  selector: 'app-upload-area-example',
  imports: [
    JsonPipe,
    UploadAreaComponent
  ],
  templateUrl: './upload-area-example.component.html',
  styleUrl: './upload-area-example.component.scss'
})
export class UploadAreaExampleComponent {
  files: any[] = [];

  onFileSelected(event: UploadFileSelectedEvent): void {
    this.files = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }
}
