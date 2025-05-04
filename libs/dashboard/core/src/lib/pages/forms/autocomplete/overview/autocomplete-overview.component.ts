import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PlaygroundComponent } from '@core';
import { map, Observable, startWith } from 'rxjs';
import {
  AutocompleteFilterExampleComponent
} from '@core';
import {
  SimpleAutocompleteExampleComponent
} from '@core';
import {
  SeparateControlsAndDisplayValuesExampleComponent
} from '@core';
import {
  AutoHighlightFirstPersonExampleComponent
} from '@core';
import { OptionGroupsExampleComponent } from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  imports: [
    ReactiveFormsModule,
    PlaygroundComponent,
    AutocompleteFilterExampleComponent,
    SimpleAutocompleteExampleComponent,
    SeparateControlsAndDisplayValuesExampleComponent,
    AutoHighlightFirstPersonExampleComponent,
    OptionGroupsExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './autocomplete-overview.component.html',
  styleUrl: './autocomplete-overview.component.scss'
})
export class AutocompleteOverviewComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
