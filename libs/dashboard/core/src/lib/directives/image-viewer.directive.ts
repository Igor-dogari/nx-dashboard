import { DestroyRef, Directive, inject, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ImageViewerComponent,
} from '@core/components';
import { IMAGE_VIEWER_PICTURE_DATA, IMAGE_VIEWER_PICTURE_REF, PictureOptionsInterface } from '@core/models';
import { PictureRefClass } from '@core/class';

@Directive({
  selector: '[emrImageViewer]',
  exportAs: 'emrImageViewer',
  standalone: true,
  host: {
    class: 'emr-image-viewer',
  },
})
export class ImageViewerDirective {
  private _overlay = inject(Overlay);
  private _injector = inject(Injector);
  private _destroyRef = inject(DestroyRef);

  get api() {
    return {
      open: (options: PictureOptionsInterface): PictureRefClass =>
        this._open(options),
    };
  }

  private _open(options: PictureOptionsInterface): PictureRefClass {
    const pictureRef = new PictureRefClass();
    const overlayRef = this._overlay.create({
      positionStrategy: this._overlay.position().global(),
      hasBackdrop: true,
    });
    const injector = Injector.create({
      providers: [
        {
          provide: IMAGE_VIEWER_PICTURE_REF,
          useValue: pictureRef,
        },
        {
          provide: IMAGE_VIEWER_PICTURE_DATA,
          useValue: options,
        },
      ],
      parent: this._injector,
    });
    const portal = new ComponentPortal(ImageViewerComponent, null, injector);
    overlayRef.attach(portal);
    pictureRef.closed
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => {
        overlayRef.detach();
      });
    return pictureRef;
  }
}
