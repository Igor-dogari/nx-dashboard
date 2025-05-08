import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDisabledExampleComponent } from './select-disabled-example.component';

describe('DisabledExampleComponent', () => {
  let component: SelectDisabledExampleComponent;
  let fixture: ComponentFixture<SelectDisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDisabledExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
