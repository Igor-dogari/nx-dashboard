import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOverviewComponent } from './bottom-sheet-overview.component';

describe('OverviewComponent', () => {
  let component: BottomSheetOverviewComponent;
  let fixture: ComponentFixture<BottomSheetOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
