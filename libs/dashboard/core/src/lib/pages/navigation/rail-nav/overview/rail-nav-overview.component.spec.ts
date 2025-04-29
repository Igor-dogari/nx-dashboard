import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailNavOverviewComponent } from './rail-nav-overview.component';

describe('OverviewComponent', () => {
  let component: RailNavOverviewComponent;
  let fixture: ComponentFixture<RailNavOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailNavOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailNavOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
