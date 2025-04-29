import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorLinkDialog } from './comment-editor-link.dialog';

describe('LinkDialog', () => {
  let component: CommentEditorLinkDialog;
  let fixture: ComponentFixture<CommentEditorLinkDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorLinkDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorLinkDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
