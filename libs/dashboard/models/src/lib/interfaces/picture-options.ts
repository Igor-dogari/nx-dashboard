import { TemplateRef } from '@angular/core';

export interface PictureOptionsInterface {
  sourceUrl: string;
  title?: string | undefined;
  caption?: string | undefined;
  description?: string | undefined;
  titleTplRef?: TemplateRef<any> | undefined;
  captionTplRef?: TemplateRef<any> | undefined;
  descriptionTplRef?: TemplateRef<any> | undefined;
}
