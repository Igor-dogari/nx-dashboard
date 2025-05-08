import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeOverviewComponent } from './marquee-overview.component';

describe('OverviewComponent', () => {
  let component: MarqueeOverviewComponent;
  let fixture: ComponentFixture<MarqueeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
