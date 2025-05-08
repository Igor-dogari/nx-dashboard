import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorYoutubeDialogComponent } from './comment-editor-youtube-dialog.component';

describe('YoutubeDialog', () => {
  let component: CommentEditorYoutubeDialogComponent;
  let fixture: ComponentFixture<CommentEditorYoutubeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorYoutubeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorYoutubeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
