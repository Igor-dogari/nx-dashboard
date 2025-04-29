import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleOverviewComponent } from './slide-toggle-overview.component';

describe('OverviewComponent', () => {
  let component: SlideToggleOverviewComponent;
  let fixture: ComponentFixture<SlideToggleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideToggleOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideToggleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
