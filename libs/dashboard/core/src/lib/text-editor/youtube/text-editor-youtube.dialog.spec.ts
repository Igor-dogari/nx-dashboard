import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorYoutubeDialog } from './text-editor-youtube.dialog';

describe('YoutubeDialog', () => {
  let component: TextEditorYoutubeDialog;
  let fixture: ComponentFixture<TextEditorYoutubeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorYoutubeDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorYoutubeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
