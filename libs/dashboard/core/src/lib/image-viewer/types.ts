import { InjectionToken } from '@angular/core';
import { PictureRef } from './picture-ref';
import { PictureOptionsInterface } from '@models';

export const IMAGE_VIEWER = new InjectionToken('IMAGE_VIEWER');
export const IMAGE_VIEWER_PICTURE_REF = new InjectionToken<PictureRef>(
  'IMAGE_VIEWER_PICTURE_REF',
);
export const IMAGE_VIEWER_PICTURE_DATA =
  new InjectionToken<PictureOptionsInterface>('IMAGE_VIEWER_PICTURE_DATA');
