import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandOverviewComponent } from './expand-overview.component';

describe('OverviewComponent', () => {
  let component: ExpandOverviewComponent;
  let fixture: ComponentFixture<ExpandOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
