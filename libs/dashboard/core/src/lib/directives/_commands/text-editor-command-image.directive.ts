import { Directive, inject } from '@angular/core';
import { TEXT_EDITOR, TextEditor, UploadFileSelectedEvent } from '@core/models';
import { UploadTriggerDirective } from '../upload-trigger.directive';

@Directive({
  selector: '[emrTextEditorCommandImage]',
  exportAs: 'emrTextEditorCommandImage',
  hostDirectives: [
    {
      directive: UploadTriggerDirective,
      outputs: ['fileSelected']
    }
  ],
  host: {
    '[attr.accept]': '"image/*"',
    '(fileSelected)': `onImageSelected($event)`
  }
})
export class TextEditorCommandImageDirective {
  protected textEditor = inject<TextEditor>(TEXT_EDITOR);

  protected onImageSelected(event: UploadFileSelectedEvent): void {
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const src = reader.result as string;
      this.textEditor.api.editor().chain().focus().addImageUploadingPlaceholder({ src, file }).run();
    };
  }
}
