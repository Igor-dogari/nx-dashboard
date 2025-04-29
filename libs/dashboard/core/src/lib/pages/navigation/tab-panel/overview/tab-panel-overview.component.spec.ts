import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelOverviewComponent } from './tab-panel-overview.component';

describe('OverviewComponent', () => {
  let component: TabPanelOverviewComponent;
  let fixture: ComponentFixture<TabPanelOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPanelOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPanelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
