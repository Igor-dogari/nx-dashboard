import { InputSignal } from '@angular/core';
import { WidgetInterface } from '@models';

export interface WidgetComponentInterface {
  widget: InputSignal<WidgetInterface | undefined>;
}
