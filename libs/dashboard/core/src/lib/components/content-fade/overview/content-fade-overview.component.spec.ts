import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFadeOverviewComponent } from './content-fade-overview.component';

describe('OverviewComponent', () => {
  let component: ContentFadeOverviewComponent;
  let fixture: ComponentFixture<ContentFadeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentFadeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFadeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
