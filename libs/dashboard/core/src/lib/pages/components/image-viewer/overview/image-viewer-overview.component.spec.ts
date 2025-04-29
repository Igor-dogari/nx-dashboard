import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerOverviewComponent } from './image-viewer-overview.component';

describe('OverviewComponent', () => {
  let component: ImageViewerOverviewComponent;
  let fixture: ComponentFixture<ImageViewerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageViewerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
