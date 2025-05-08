import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeOverviewComponent } from './tree-overview.component';

describe('OverviewComponent', () => {
  let component: TreeOverviewComponent;
  let fixture: ComponentFixture<TreeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
