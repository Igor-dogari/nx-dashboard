import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOverviewComponent } from './icon-overview.component';

describe('OverviewComponent', () => {
  let component: IconOverviewComponent;
  let fixture: ComponentFixture<IconOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
