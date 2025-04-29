import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandBarOverviewComponent } from './command-bar-overview.component';

describe('OverviewComponent', () => {
  let component: CommandBarOverviewComponent;
  let fixture: ComponentFixture<CommandBarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandBarOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandBarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
