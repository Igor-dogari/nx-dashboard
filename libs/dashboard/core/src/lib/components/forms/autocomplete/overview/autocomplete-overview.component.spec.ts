import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOverviewComponent } from './autocomplete-overview.component';

describe('OverviewComponent', () => {
  let component: AutocompleteOverviewComponent;
  let fixture: ComponentFixture<AutocompleteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
