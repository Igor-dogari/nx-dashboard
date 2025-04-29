import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorYoutubeDialog } from './comment-editor-youtube.dialog';

describe('YoutubeDialog', () => {
  let component: CommentEditorYoutubeDialog;
  let fixture: ComponentFixture<CommentEditorYoutubeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorYoutubeDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorYoutubeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
