import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorImageUploadingPlaceholderComponent } from './text-editor-image-uploading-placeholder.component';

describe('ImageUploadingPlaceholderComponent', () => {
  let component: TextEditorImageUploadingPlaceholderComponent;
  let fixture: ComponentFixture<TextEditorImageUploadingPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorImageUploadingPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorImageUploadingPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
