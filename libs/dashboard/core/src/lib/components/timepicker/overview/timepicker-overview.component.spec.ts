import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerOverviewComponent } from './timepicker-overview.component';

describe('OverviewComponent', () => {
  let component: TimepickerOverviewComponent;
  let fixture: ComponentFixture<TimepickerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimepickerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepickerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
