export interface WidgetConfigInterface {
  type: string;
  skeleton?: any;
  plain?: boolean;
  component: () => Promise<any>;
}
