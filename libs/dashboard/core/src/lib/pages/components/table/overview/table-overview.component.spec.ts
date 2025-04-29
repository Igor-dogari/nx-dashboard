import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOverviewComponent } from './table-overview.component';

describe('OverviewComponent', () => {
  let component: TableOverviewComponent;
  let fixture: ComponentFixture<TableOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
