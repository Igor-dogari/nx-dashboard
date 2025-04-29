import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidgetsOverviewComponent } from './sidebar-widgets-overview.component';

describe('OverviewComponent', () => {
  let component: SidebarWidgetsOverviewComponent;
  let fixture: ComponentFixture<SidebarWidgetsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWidgetsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWidgetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
