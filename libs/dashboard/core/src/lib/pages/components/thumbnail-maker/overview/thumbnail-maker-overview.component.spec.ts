import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailMakerOverviewComponent } from './thumbnail-maker-overview.component';

describe('OverviewComponent', () => {
  let component: ThumbnailMakerOverviewComponent;
  let fixture: ComponentFixture<ThumbnailMakerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailMakerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailMakerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
