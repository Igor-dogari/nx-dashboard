import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonOverviewComponent } from './skeleton-overview.component';

describe('OverviewComponent', () => {
  let component: SkeletonOverviewComponent;
  let fixture: ComponentFixture<SkeletonOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
