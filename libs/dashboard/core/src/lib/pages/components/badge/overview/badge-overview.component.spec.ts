import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeOverviewComponent } from './badge-overview.component';

describe('OverviewComponent', () => {
  let component: BadgeOverviewComponent;
  let fixture: ComponentFixture<BadgeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
