import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOverviewComponent } from './slider-overview.component';

describe('OverviewComponent', () => {
  let component: SliderOverviewComponent;
  let fixture: ComponentFixture<SliderOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
