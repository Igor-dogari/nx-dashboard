import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorYoutubeDialogComponent } from './text-editor-youtube-dialog.component';

describe('YoutubeDialog', () => {
  let component: TextEditorYoutubeDialogComponent;
  let fixture: ComponentFixture<TextEditorYoutubeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorYoutubeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorYoutubeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
