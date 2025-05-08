import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSkeletonOverviewComponent } from './store-skeleton-overview.component';

describe('OverviewComponent', () => {
  let component: StoreSkeletonOverviewComponent;
  let fixture: ComponentFixture<StoreSkeletonOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreSkeletonOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSkeletonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
