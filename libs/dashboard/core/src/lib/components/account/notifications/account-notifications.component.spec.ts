import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotificationsComponent } from '@core/pages';

describe('NotificationsComponent', () => {
  let component: AccountNotificationsComponent;
  let fixture: ComponentFixture<AccountNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
