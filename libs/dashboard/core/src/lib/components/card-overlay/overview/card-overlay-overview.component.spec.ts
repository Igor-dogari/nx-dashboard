import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverlayOverviewComponent } from './card-overlay-overview.component';

describe('OverviewComponent', () => {
  let component: CardOverlayOverviewComponent;
  let fixture: ComponentFixture<CardOverlayOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOverlayOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOverlayOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
