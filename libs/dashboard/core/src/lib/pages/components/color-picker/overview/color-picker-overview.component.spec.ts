import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerOverviewComponent } from './color-picker-overview.component';

describe('OverviewComponent', () => {
  let component: ColorPickerOverviewComponent;
  let fixture: ComponentFixture<ColorPickerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPickerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
