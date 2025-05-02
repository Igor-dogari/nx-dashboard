import { InputSignal } from '@angular/core';
import { WidgetInterface } from '@shared';

export interface WidgetComponentInterface {
  widget: InputSignal<WidgetInterface | undefined>;
}
