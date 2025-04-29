import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineOverviewComponent } from './timeline-overview.component';

describe('OverviewComponent', () => {
  let component: TimelineOverviewComponent;
  let fixture: ComponentFixture<TimelineOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
