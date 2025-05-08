import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IconComponent, Transaction, TransactionsWidgetComponent } from '@core/components';
import { MatRipple } from '@angular/material/core';

@Component({
  imports: [
    DecimalPipe,
    MatButton,
    MatIcon,
    IconComponent,
    MatRipple,
    TransactionsWidgetComponent
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {
  totalBalance = 2136;
  currencyCode = 'usd';
  transactions: Transaction[] = [
    {
      createdAt: '14 Feb',
      status: 'approved',
      to: {
        amount: 129.81,
        currency: 'GPB'
      },
      from: {
        amount: 50,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Igor Dogari'
      },
      recipient: {
        id: 1,
        name: 'Igor Dogari'
      }
    },
    {
      createdAt: '14 Feb',
      status: 'cancelled',
      to: {
        amount: 129.81,
        currency: 'GPB'
      },
      from: {
        amount: 50,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Igor Dogari'
      },
      recipient: {
        id: 1,
        name: 'Igor Dogari'
      }
    },
    {
      createdAt: '12 Feb',
      status: 'cancelled',
      to: {
        amount: 100.02,
        currency: 'GPB'
      },
      from: {
        amount: 44,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Igor Dogari'
      },
      recipient: {
        id: 1,
        name: 'Igor Dogari'
      }
    },
    {
      createdAt: '12 Feb',
      status: 'approved',
      to: {
        amount: 155.81,
        currency: 'GPB'
      },
      from: {
        amount: 55,
        currency: 'USD'
      },
      sender: {
        id: 1,
        name: 'Igor Dogari'
      },
      recipient: {
        id: 1,
        name: 'Igor Dogari'
      }
    },
  ];
  protected readonly screen = screen;
}
