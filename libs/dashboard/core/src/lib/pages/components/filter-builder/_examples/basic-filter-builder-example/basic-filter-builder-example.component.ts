import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FilterBuilderComponent } from '@core';
import {
  FilterBuilderFieldDefInterface,
  FilterBuilderGroupInterface,
} from '@core';

@Component({
  selector: 'app-basic-filter-builder-example',
  imports: [JsonPipe, FilterBuilderComponent],
  templateUrl: './basic-filter-builder-example.component.html',
  styleUrl: './basic-filter-builder-example.component.scss',
})
export class BasicFilterBuilderExampleComponent {
  value: FilterBuilderGroupInterface[] = [
    {
      logicalOperator: 'or',
      value: [
        {
          logicalOperator: 'and',
          value: [
            // {
            //   value: ['category', 'equals', 'televisions']
            // },
            {
              value: ['price', 'isBetween', [2000, 4000]],
            },
          ],
        },
      ],
    },
  ];
  fieldDefs: FilterBuilderFieldDefInterface[] = [
    {
      name: 'Name',
      dataType: 'string',
      dataField: 'name',
    },
    {
      name: 'Price',
      format: 'currency',
      dataType: 'number',
      dataField: 'price',
    },
    {
      dataType: 'array',
      dataField: 'category',
      name: 'Category',
      lookup: {
        dataSource: [
          {
            id: 'video-players',
            name: 'Video Players',
          },
          {
            id: 'televisions',
            name: 'Televisions',
          },
          {
            id: 'monitors',
            name: 'Monitors',
          },
          {
            id: 'projectors',
            name: 'Projectors',
          },
          {
            id: 'automation',
            name: 'Automation',
          },
        ],
      },
    },
  ];
}
