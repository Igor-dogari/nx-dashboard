import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOverviewComponent } from './sidebar-overview.component';

describe('OverviewComponent', () => {
  let component: SidebarOverviewComponent;
  let fixture: ComponentFixture<SidebarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
