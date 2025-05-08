import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonComponent } from './app-common.component';

describe('CommonComponent', () => {
  let component: AppCommonComponent;
  let fixture: ComponentFixture<AppCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
