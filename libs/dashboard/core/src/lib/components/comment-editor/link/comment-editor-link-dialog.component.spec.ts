import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorLinkDialogComponent } from './comment-editor-link-dialog.component';

describe('LinkDialog', () => {
  let component: CommentEditorLinkDialogComponent;
  let fixture: ComponentFixture<CommentEditorLinkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorLinkDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
