import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelOverviewComponent } from './expansion-panel-overview.component';

describe('OverviewComponent', () => {
  let component: ExpansionPanelOverviewComponent;
  let fixture: ComponentFixture<ExpansionPanelOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanelOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
