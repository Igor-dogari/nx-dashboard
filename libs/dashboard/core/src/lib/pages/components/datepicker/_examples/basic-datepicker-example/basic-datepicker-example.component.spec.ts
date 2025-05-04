import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatepickerExampleComponent } from '@core/pages';

describe('BasicDatepickerExampleComponent', () => {
  let component: BasicDatepickerExampleComponent;
  let fixture: ComponentFixture<BasicDatepickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDatepickerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDatepickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
