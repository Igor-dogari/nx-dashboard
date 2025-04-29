import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmrKanbanBoardComponent } from './emr-kanban-board.component';

describe('KanbanBoardComponent', () => {
  let component: EmrKanbanBoardComponent;
  let fixture: ComponentFixture<EmrKanbanBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmrKanbanBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmrKanbanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
