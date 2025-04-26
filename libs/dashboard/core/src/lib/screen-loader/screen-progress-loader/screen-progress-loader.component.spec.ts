import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProgressLoaderComponent } from './screen-progress-loader.component';

describe('ScreenLoaderComponent', () => {
  let component: ScreenProgressLoaderComponent;
  let fixture: ComponentFixture<ScreenProgressLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenProgressLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenProgressLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
