import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeOverviewComponent } from './gauge-overview.component';

describe('OverviewComponent', () => {
  let component: GaugeOverviewComponent;
  let fixture: ComponentFixture<GaugeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
