import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOverviewComponent } from './alert-overview.component';

describe('OverviewComponent', () => {
  let component: AlertOverviewComponent;
  let fixture: ComponentFixture<AlertOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
