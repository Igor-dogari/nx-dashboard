import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorLinkDialog } from './text-editor-link.dialog';

describe('LinkDialog', () => {
  let component: TextEditorLinkDialog;
  let fixture: ComponentFixture<TextEditorLinkDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorLinkDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorLinkDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
