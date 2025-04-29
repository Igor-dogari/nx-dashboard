import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppKanbanBoardComponent } from './app-kanban-board.component';

describe('KanbanBoardComponent', () => {
  let component: AppKanbanBoardComponent;
  let fixture: ComponentFixture<AppKanbanBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppKanbanBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppKanbanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
