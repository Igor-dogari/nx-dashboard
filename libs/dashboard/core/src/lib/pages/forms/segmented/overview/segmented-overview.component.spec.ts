import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedOverviewComponent } from './segmented-overview.component';

describe('OverviewComponent', () => {
  let component: SegmentedOverviewComponent;
  let fixture: ComponentFixture<SegmentedOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
