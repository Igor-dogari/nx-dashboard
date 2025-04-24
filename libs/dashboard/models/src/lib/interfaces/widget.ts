export interface WidgetInterface {
  id: any;
  type: string;
  columns: number;
  skeleton?: {
    minHeight: string;
  }
  [propName: string]: any;
}
