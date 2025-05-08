import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  AutocompleteFilterExampleComponent,
  AutoHighlightFirstPersonExampleComponent,
  OptionGroupsExampleComponent,
  PageComponent,
  PlaygroundComponent,
  SeparateControlsAndDisplayValuesExampleComponent,
  SimpleAutocompleteExampleComponent
} from '@core/components';
import { map, Observable, startWith } from 'rxjs';
import { PageContentDirective } from '@core/directives';

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
