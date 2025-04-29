import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarOverviewComponent } from './progress-bar-overview.component';

describe('OverviewComponent', () => {
  let component: ProgressBarOverviewComponent;
  let fixture: ComponentFixture<ProgressBarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
