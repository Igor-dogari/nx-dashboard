import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatOption, MatRipple } from '@angular/material/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { File, FileSelectedEvent } from '@core/models';
import {
  AvatarComponent, FileGridLayoutComponent,
  FileLargeGridLayoutComponent,
  FileLargeListLayoutComponent,
  FileListLayoutComponent
} from '@core/components';
import { MenuOptionGroupDirective } from '@core/directives';

@Component({
  imports: [
    MatIcon,
    MatRipple,
    MatIconButton,
    MatTooltip,
    MatChipOption,
    MatChipListbox,
    MatCheckbox,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDivider,
    MatOption,
    ReactiveFormsModule,
    MenuOptionGroupDirective,
    FileLargeGridLayoutComponent,
    FileListLayoutComponent,
    FileLargeListLayoutComponent,
    FileGridLayoutComponent,
    MatButton,
    AvatarComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  private _fb = inject(FormBuilder);

  settingsForm = this._fb.group({
    layout: ['grid'],
    filePreview: ['fullscreen'],
  });
  starredIds: string[] = ['4'];
  files: File[] = [
    {
      id: '1',
      type: 'folder',
      size: 1000000,
      name: 'My folder',
      isShared: true,
      itemsCount: 38,
    },
    {
      id: '2',
      type: 'folder',
      size: 1000000,
      name: 'Work',
      isShared: false,
      itemsCount: 12,
    },
    {
      id: '3',
      type: 'folder',
      size: 1000000,
      name: 'Photos',
      isShared: false,
      itemsCount: 299,
    },
    {
      id: '4',
      type: 'image',
      size: 500000,
      name: 'My Image',
      thumbnailUrl: 'https://placehold.co/200x200/FFFFFF/000000/png',
      extension: 'jpg',
      isShared: false,
      itemsCount: 1,
    },
    {
      id: '5',
      type: 'archive',
      size: 23000,
      name: 'New Archive',
      extension: 'zip',
      isShared: false,
      itemsCount: 22,
    },
  ];
  selectedFiles: File[] = [];

  get indeterminate(): boolean {
    return this.checked && this.selectedFiles.length !== this.files.length;
  }

  get checked(): boolean {
    return this.selectedFiles.length > 0;
  }

  fileSelected(event: FileSelectedEvent): void {
    this.selectedFiles = event.files;
  }
}
