import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOverviewComponent } from './carousel-overview.component';

describe('OverviewComponent', () => {
  let component: CarouselOverviewComponent;
  let fixture: ComponentFixture<CarouselOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
