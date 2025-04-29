import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorImageUploadingPlaceholderComponent } from './comment-editor-image-uploading-placeholder.component';

describe('ImageUploadingPlaceholderComponent', () => {
  let component: CommentEditorImageUploadingPlaceholderComponent;
  let fixture: ComponentFixture<CommentEditorImageUploadingPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorImageUploadingPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorImageUploadingPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
