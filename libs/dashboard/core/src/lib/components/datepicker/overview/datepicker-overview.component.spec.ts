import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerOverviewComponent } from './datepicker-overview.component';

describe('OverviewComponent', () => {
  let component: DatepickerOverviewComponent;
  let fixture: ComponentFixture<DatepickerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
