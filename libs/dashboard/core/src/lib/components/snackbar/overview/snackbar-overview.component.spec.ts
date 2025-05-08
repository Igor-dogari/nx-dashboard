import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarOverviewComponent } from './snackbar-overview.component';

describe('OverviewComponent', () => {
  let component: SnackbarOverviewComponent;
  let fixture: ComponentFixture<SnackbarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
