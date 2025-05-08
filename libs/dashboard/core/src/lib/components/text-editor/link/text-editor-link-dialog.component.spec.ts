import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorLinkDialogComponent } from './text-editor-link-dialog.component';

describe('LinkDialog', () => {
  let component: TextEditorLinkDialogComponent;
  let fixture: ComponentFixture<TextEditorLinkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorLinkDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
