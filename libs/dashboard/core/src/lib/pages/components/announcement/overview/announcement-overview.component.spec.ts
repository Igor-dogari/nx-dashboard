import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementOverviewComponent } from './announcement-overview.component';

describe('OverviewComponent', () => {
  let component: AnnouncementOverviewComponent;
  let fixture: ComponentFixture<AnnouncementOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
