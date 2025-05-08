import { EventEmitter } from '@angular/core';

export class PictureRefClass {
  readonly closed = new EventEmitter();

  close(): void {
    this.closed.emit();
  }
}
