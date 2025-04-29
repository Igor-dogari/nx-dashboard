import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOverviewComponent } from './popover-overview.component';

describe('OverviewComponent', () => {
  let component: PopoverOverviewComponent;
  let fixture: ComponentFixture<PopoverOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
