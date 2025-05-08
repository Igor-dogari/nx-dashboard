import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOverviewComponent } from './input-overview.component';

describe('OverviewComponent', () => {
  let component: InputOverviewComponent;
  let fixture: ComponentFixture<InputOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
