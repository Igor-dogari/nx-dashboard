import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsOverviewComponent } from './widgets-overview.component';

describe('OverviewComponent', () => {
  let component: WidgetsOverviewComponent;
  let fixture: ComponentFixture<WidgetsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
