import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsOverviewComponent } from './suggestions-overview.component';

describe('OverviewComponent', () => {
  let component: SuggestionsOverviewComponent;
  let fixture: ComponentFixture<SuggestionsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
