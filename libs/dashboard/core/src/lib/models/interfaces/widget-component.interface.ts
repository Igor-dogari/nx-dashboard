import { InputSignal } from '@angular/core';
import { WidgetInterface } from '@core/models';

export interface WidgetComponentInterface {
  widget: InputSignal<WidgetInterface | undefined>;
}
