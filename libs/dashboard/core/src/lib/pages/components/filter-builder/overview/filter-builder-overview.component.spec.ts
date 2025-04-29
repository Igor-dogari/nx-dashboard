import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBuilderOverviewComponent } from './filter-builder-overview.component';

describe('OverviewComponent', () => {
  let component: FilterBuilderOverviewComponent;
  let fixture: ComponentFixture<FilterBuilderOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterBuilderOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBuilderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
