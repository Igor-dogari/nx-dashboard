import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputOverviewComponent } from './number-input-overview.component';

describe('OverviewComponent', () => {
  let component: NumberInputOverviewComponent;
  let fixture: ComponentFixture<NumberInputOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInputOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
