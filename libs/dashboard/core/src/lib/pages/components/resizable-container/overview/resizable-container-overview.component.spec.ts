import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableContainerOverviewComponent } from './resizable-container-overview.component';

describe('OverviewComponent', () => {
  let component: ResizableContainerOverviewComponent;
  let fixture: ComponentFixture<ResizableContainerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResizableContainerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizableContainerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
