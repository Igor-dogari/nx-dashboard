import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResizerOverviewComponent } from './image-resizer-overview.component';

describe('OverviewComponent', () => {
  let component: ImageResizerOverviewComponent;
  let fixture: ComponentFixture<ImageResizerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageResizerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageResizerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
