import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOverviewComponent } from './panel-overview.component';

describe('OverviewComponent', () => {
  let component: PanelOverviewComponent;
  let fixture: ComponentFixture<PanelOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
