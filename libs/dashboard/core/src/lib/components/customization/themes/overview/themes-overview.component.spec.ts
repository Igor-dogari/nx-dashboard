import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesOverviewComponent } from './themes-overview.component';

describe('OverviewComponent', () => {
  let component: ThemesOverviewComponent;
  let fixture: ComponentFixture<ThemesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
