import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsOverviewComponent } from './notifications-overview.component';

describe('OverviewComponent', () => {
  let component: NotificationsOverviewComponent;
  let fixture: ComponentFixture<NotificationsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
