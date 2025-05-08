import { InjectionToken } from '@angular/core';
import { PictureOptionsInterface } from '@core/models';
import { PictureRefClass } from '@core/class';

export const IMAGE_VIEWER = new InjectionToken('IMAGE_VIEWER');
export const IMAGE_VIEWER_PICTURE_REF = new InjectionToken<PictureRefClass>(
  'IMAGE_VIEWER_PICTURE_REF',
);
export const IMAGE_VIEWER_PICTURE_DATA =
  new InjectionToken<PictureOptionsInterface>('IMAGE_VIEWER_PICTURE_DATA');
