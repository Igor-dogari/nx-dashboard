import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOverviewComponent } from './confirm-overview.component';

describe('OverviewComponent', () => {
  let component: ConfirmOverviewComponent;
  let fixture: ComponentFixture<ConfirmOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
