import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateOverviewComponent } from './block-state-overview.component';

describe('OverviewComponent', () => {
  let component: BlockStateOverviewComponent;
  let fixture: ComponentFixture<BlockStateOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
