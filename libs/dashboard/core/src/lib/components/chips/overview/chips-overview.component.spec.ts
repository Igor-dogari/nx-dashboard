import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsOverviewComponent } from './chips-overview.component';

describe('OverviewComponent', () => {
  let component: ChipsOverviewComponent;
  let fixture: ComponentFixture<ChipsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
