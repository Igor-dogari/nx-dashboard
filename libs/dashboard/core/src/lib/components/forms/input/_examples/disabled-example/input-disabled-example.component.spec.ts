import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDisabledExampleComponent } from './input-disabled-example.component';

describe('DisabledExampleComponent', () => {
  let component: InputDisabledExampleComponent;
  let fixture: ComponentFixture<InputDisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDisabledExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
