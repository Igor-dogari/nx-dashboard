import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLoaderOverviewComponent } from './screen-loader-overview.component';

describe('OverviewComponent', () => {
  let component: ScreenLoaderOverviewComponent;
  let fixture: ComponentFixture<ScreenLoaderOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenLoaderOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenLoaderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
