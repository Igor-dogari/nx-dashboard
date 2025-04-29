import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorOverviewComponent } from './comment-editor-overview.component';

describe('OverviewComponent', () => {
  let component: CommentEditorOverviewComponent;
  let fixture: ComponentFixture<CommentEditorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
