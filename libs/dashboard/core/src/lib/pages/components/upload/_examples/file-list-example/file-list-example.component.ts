import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FileInterface } from '@shared';
import { FileComponent, FileControlComponent, FileListComponent } from '@core';

@Component({
  selector: 'app-file-list-example',
  imports: [
    MatIcon,
    FileComponent,
    FileListComponent,
    FileControlComponent
  ],
  templateUrl: './file-list-example.component.html',
  styleUrl: './file-list-example.component.scss'
})
export class FileListExampleComponent {
  fileList: FileInterface[] = [
    {
      name: 'Annual Report.docx',
      state: 'uploaded',
      processing: false
    },
    {
      name: 'Workflow.pdf',
      state: 'uploading',
      processing: false,
      remainingTime: '(remaining time: 00:2:01)',
      size: '11MB',
      progress: 60
    },
    {
      name: 'Financials.xlsx',
      state: 'error',
      errorMessage: 'An error occurred'
    }
  ];
}
