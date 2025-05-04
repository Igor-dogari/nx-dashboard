import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PlaygroundComponent } from '@core';
import { map, Observable, startWith } from 'rxjs';
import {
  AutocompleteFilterExampleComponent
} from '@core/pages';
import {
  SimpleAutocompleteExampleComponent
} from '@core/pages';
import {
  SeparateControlsAndDisplayValuesExampleComponent
} from '@core/pages';
import {
  AutoHighlightFirstPersonExampleComponent
} from '@core/pages';
import { OptionGroupsExampleComponent } from '@core/pages';
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
