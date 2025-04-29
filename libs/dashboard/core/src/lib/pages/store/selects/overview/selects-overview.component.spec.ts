import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsOverviewComponent } from './selects-overview.component';

describe('OverviewComponent', () => {
  let component: SelectsOverviewComponent;
  let fixture: ComponentFixture<SelectsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
