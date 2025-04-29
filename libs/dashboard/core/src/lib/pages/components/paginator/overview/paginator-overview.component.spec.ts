import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorOverviewComponent } from './paginator-overview.component';

describe('OverviewComponent', () => {
  let component: PaginatorOverviewComponent;
  let fixture: ComponentFixture<PaginatorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
