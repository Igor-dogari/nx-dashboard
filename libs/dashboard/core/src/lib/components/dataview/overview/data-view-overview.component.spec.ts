import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewOverviewComponent } from './data-view-overview.component';

describe('OverviewComponent', () => {
  let component: DataViewOverviewComponent;
  let fixture: ComponentFixture<DataViewOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataViewOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
