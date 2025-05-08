import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipOverviewComponent } from './tooltip-overview.component';

describe('OverviewComponent', () => {
  let component: TooltipOverviewComponent;
  let fixture: ComponentFixture<TooltipOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
