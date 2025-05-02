import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnInit,
  output,
  PLATFORM_ID,
  viewChildren,
  contentChildren, TemplateRef, input
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FilterBuilderOperationDefDirective } from '../filter-builder-operation-def.directive';
import {
  FilterBuilderConditionInterface,
  FilterBuilderFieldDataSourceItemInterface,
  FilterBuilderFieldDefInterface,
  FilterBuilderGroupInterface,
  FilterBuilderItemType
} from '@core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { FilterBuilderOperationNameDirective } from '../filter-builder-operation-name.directive';
import { AutoFocusDirective, FocusElementDirective, MenuOptionGroupDirective } from '@core';

@Component({
  selector: 'emr-filter-builder',
  exportAs: 'emrFilterBuilder',
  imports: [
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    MenuOptionGroupDirective,
    FormsModule,
    MatOption,
    MatMenuItem,
    NgTemplateOutlet,
    MatFormField,
    MatSelect,
    AutoFocusDirective,
    FocusElementDirective,
    MatInput,
    FilterBuilderOperationDefDirective,
    FilterBuilderOperationNameDirective
  ],
  templateUrl: './filter-builder.component.html',
  styleUrl: './filter-builder.component.scss',
  host: {
    'class': 'emr-filter-builder'
  },
})
export class FilterBuilderComponent implements OnInit, AfterViewInit {
  protected _cdr = inject(ChangeDetectorRef);
  protected _platformId = inject(PLATFORM_ID);
  protected _operationAllowedTypesMap: Map<string, string[]> = new Map();
  private _resetMethodMap: { [prop: string]: (condition: FilterBuilderConditionInterface) => void } = {
    '_resetStringValue': this._resetStringValue,
    '_resetBooleanValue': this._resetBooleanValue,
    '_resetArrayValue': this._resetArrayValue,
    '_resetNumberValue': this._resetNumberValue,
  };

  value = input<FilterBuilderGroupInterface[]>([]);
  fieldDefs = input<FilterBuilderFieldDefInterface[]>([]);
  categories = input([]);
  groupOperations = input([
    {
      id: 'and',
      name: 'And'
    },
    {
      id: 'or',
      name: 'Or'
    }
  ]);
  customOperations = input([]);

  protected _logicalOperator = this.groupOperations()[0].id;
  readonly _prebuiltOperationDefs = viewChildren(FilterBuilderOperationDefDirective);
  readonly _customOperationDefs = contentChildren(FilterBuilderOperationDefDirective);
  protected _operationDefs: FilterBuilderOperationDefDirective[] = [];

  readonly valueChanged = output<FilterBuilderGroupInterface[]>();

  protected _value: FilterBuilderGroupInterface[] = [];
  protected _operations: any[] = [];
  protected editItem: FilterBuilderConditionInterface | undefined;

  ngOnInit() {
    if (this.value().length) {
      if (!this._isGroup(this.value()[0])) {
        throw new Error('Invalid filter value, first element should be a filter group');
      }

      this._logicalOperator = this.value()[0]['logicalOperator'] as string;
      this._value = JSON.parse(JSON.stringify(this.value()[0]['value']));
    }
  }

  ngAfterViewInit(): void {
    this._operationDefs = [...this._prebuiltOperationDefs(), ...this._customOperationDefs()];
    this._operationDefs.forEach(operationDef => {
      this._operations.push({
        id: operationDef.id(),
        name: operationDef.operationName()?.templateRef
      });
      operationDef.allowedDataTypes().forEach((allowedType: string) => {
        if (!this._operationAllowedTypesMap.has(allowedType)) {
          this._operationAllowedTypesMap.set(allowedType, []);
        }

        const allowedTypeValue = this._operationAllowedTypesMap.get(allowedType) as string[];
        allowedTypeValue.push(operationDef.id());
        this._operationAllowedTypesMap.set(allowedType, allowedTypeValue);
      });
    });
    this._cdr.detectChanges();
  }

  addCondition(targetGroup?: FilterBuilderGroupInterface) {
    const value = !targetGroup ? this._value : targetGroup.value;
    value.push(
      {
        value: [this.fieldDefs()[0].dataField, this._operations[0].id, '']
      }
    );
  }

  addGroup(targetGroup?: FilterBuilderGroupInterface) {
    const value = !targetGroup ? this._value : targetGroup.value;
    value.push(
      {
        logicalOperator: this.groupOperations()[0].id,
        value: []
      }
    );
  }

  getConditionField(dataField: string): FilterBuilderFieldDefInterface | undefined {
    return this.fieldDefs().find(field => field.dataField === dataField);
  }

  getConditionOperation(id: string) {
    return this._operations.find(operation => operation.id === id);
  }

  getSelectedGroupOperationName(targetGroup?: FilterBuilderGroupInterface): string {
    const groupLogicalOperatorId = targetGroup ? targetGroup.logicalOperator : this._logicalOperator
    return this.groupOperations().find(groupOperator => groupOperator.id === groupLogicalOperatorId)?.name || '';
  }

  selectConditionField(item: FilterBuilderConditionInterface, field: FilterBuilderFieldDefInterface): void {
    this.editItem = undefined;
    let allowedTypes = this._operationAllowedTypesMap.get(field.dataType) as string[];
    item['value'][1] = allowedTypes[0];
    this._resetValue(field, item);
    this._emitChangeEvent();
  }

  operationChanged(item: FilterBuilderConditionInterface, operation: string): void {
    this.editItem = undefined;
    const oldOperation = item['value'][1];

    if (oldOperation === 'equals' && operation === 'isAnyOf') {
      item['value'][2] = [];
    } else if (oldOperation === 'isAnyOf' && operation === 'equals') {
      item['value'][2] = null;
    }

    if (oldOperation === 'isBetween' && operation !== 'isBetween') {
      item['value'][2] = null;
    } else if (oldOperation !== 'isBetween' && operation === 'isBetween') {
      item['value'][2] = [];
    }

    if (['isNotBlank', 'isBlank'].includes(operation)) {
      item['value'][2] = null;
    }

    item['value'][1] = operation;
    this._emitChangeEvent();
  }

  removeCondition(index: number, items: FilterBuilderItemType[]): void {
    items.splice(index, 1);
    this._emitChangeEvent();
  }

  isOperationAllowedForCondition(dataField: string, operationId: string): boolean {
    const fieldDef = this.fieldDefs().find(f =>
      f.dataField === dataField
    ) as FilterBuilderFieldDefInterface;

    let allowedTypes = this._operationAllowedTypesMap.get(fieldDef.dataType);

    if (!allowedTypes) {
      throw new Error('There are not operations for the datatype: ' + fieldDef.dataType);
    }

    return allowedTypes.includes(operationId);
  }

  modifyValue(item: FilterBuilderConditionInterface): void {
    this.editItem = item;
  }

  getFieldType(item: FilterBuilderConditionInterface): string {
    return (this.fieldDefs().find(f =>
      f.dataField === item['value'][0]
    ) as FilterBuilderFieldDefInterface).dataType;
  }

  isValueNotEmpty(item: FilterBuilderConditionInterface): boolean {
    if (this.getFieldType(item) === 'array') {
      if (item['value'][1] === 'equals') {
        return item['value'][2] !== null && item['value'][2] !== '';
      } else {
        return item['value'][2].length > 0;
      }
    }

    if (item['value'][1] === 'isBetween') {
      return item['value'][2].length === 2 && item['value'][2][0] !== null && item['value'][2][1] !== null;
    }

    return item['value'][2] !== null && item['value'][2] !== '';
  }

  cancelEdit(delay = 0): void {
    setTimeout(() => {
      this.editItem = undefined;
      this._cdr.detectChanges();
    }, delay);
  }

  getOptions(item: FilterBuilderConditionInterface): FilterBuilderFieldDataSourceItemInterface[] {
    const fieldDef = this._getFieldDef(item);
    return fieldDef.lookup?.dataSource as FilterBuilderFieldDataSourceItemInterface[];
  }

  getDataSourceItemNameById(item: FilterBuilderConditionInterface, dataSourceItemId: string): string {
    const fieldDef = this._getFieldDef(item);
    return (fieldDef.lookup?.dataSource as FilterBuilderFieldDataSourceItemInterface[]).find(
      item => item.id === dataSourceItemId
    )?.name || '';
  }

  selectBlur(event: FocusEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const select = event.target as HTMLElement;

    setTimeout(() => {
      const formField = select.closest('.mat-mdc-form-field');

      if (formField) {
        if (!formField.classList.contains('mat-focused')) {
          this.cancelEdit();
        }
      }
    }, 25);
  }

  selectClosed(): void {
    this.cancelEdit();
    this._emitChangeEvent();
  }

  protected operationIconTemplateRef(operation: FilterBuilderOperationDefDirective): TemplateRef<any> {
    return operation.operationIcon()?.templateRef as TemplateRef<any>;
  }

  protected operationNameTemplateRef(operation: FilterBuilderOperationDefDirective): TemplateRef<any> {
    return operation.operationName()?.templateRef as TemplateRef<any>;
  }

  protected _isGroup(item: FilterBuilderItemType): item is FilterBuilderGroupInterface {
    return 'logicalOperator' in item;
  }

  protected _isCondition(item: FilterBuilderItemType): item is FilterBuilderConditionInterface {
    return !('logicalOperator' in item);
  }

  protected _emitChangeEvent(): void {
    const value = this._normalizeValue(this._value);

    if (value.length > 0) {
      this.valueChanged.emit([
        {
          logicalOperator: this._logicalOperator,
          value: value
        }
      ]);
    } else {
      this.valueChanged.emit([]);
    }
  }

  private _getFieldDef(condition: FilterBuilderConditionInterface): FilterBuilderFieldDefInterface {
    return  this.fieldDefs().find(f =>
      f.dataField === condition['value'][0]
    ) as FilterBuilderFieldDefInterface;
  }

  private _resetValue(field: FilterBuilderFieldDefInterface, condition: FilterBuilderConditionInterface): void {
    const fieldDef = this.fieldDefs().find(f =>
      f.dataField === field.dataField
    ) as FilterBuilderFieldDefInterface;
    const resetMethod = '_reset' + this._capitalizeFirstLetter(fieldDef.dataType) + 'Value';
    this._resetMethodMap[resetMethod](condition);
  }

  private _resetStringValue(condition: FilterBuilderConditionInterface): void {
    condition['value'][2] = '';
  }

  private _resetNumberValue(condition: FilterBuilderConditionInterface): void {
    condition['value'][2] = null;
  }

  private _resetArrayValue(condition: FilterBuilderConditionInterface): void {
    if (condition['value'][1] === 'equals') {
      condition['value'][2] = null;
    } else {
      condition['value'][2] = [];
    }
  }

  private _resetBooleanValue(condition: FilterBuilderConditionInterface): void {
    condition['value'][2] = false;
  }

  private _capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  private _normalizeValue(value: FilterBuilderItemType[]): FilterBuilderItemType[] {
    let result: FilterBuilderItemType[] = [];
    value.forEach(item => {
      if (this._isGroup(item)) {
        const groupValue = this._normalizeValue(item.value);

        if (groupValue.length > 0) {
          result = [...result, {
            logicalOperator: item.logicalOperator,
            value: groupValue
          }];
        }
      } else {
        if (this.isValueNotEmpty(item)) {
          result.push(item);
        }
      }
    });
    return result;
  }
}
