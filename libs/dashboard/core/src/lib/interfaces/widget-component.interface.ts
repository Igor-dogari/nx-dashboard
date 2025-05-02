import { InputSignal } from '@angular/core';
import { WidgetInterface } from '@core';

export interface WidgetComponentInterface {
  widget: InputSignal<WidgetInterface | undefined>;
}
