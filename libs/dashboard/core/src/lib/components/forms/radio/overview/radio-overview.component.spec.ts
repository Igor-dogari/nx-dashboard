import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOverviewComponent } from './radio-overview.component';

describe('OverviewComponent', () => {
  let component: RadioOverviewComponent;
  let fixture: ComponentFixture<RadioOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
