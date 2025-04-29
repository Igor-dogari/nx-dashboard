import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePopupOverviewComponent } from './cookie-popup-overview.component';

describe('OverviewComponent', () => {
  let component: CookiePopupOverviewComponent;
  let fixture: ComponentFixture<CookiePopupOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiePopupOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiePopupOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
