import { mergeAttributes, Node } from '@tiptap/core'
import { Injector } from '@angular/core';
import { CommentEditorAngularNodeViewRenderer } from './comment-editor-angular-node-view-renderer';
import {
  CommentEditorImageUploadingPlaceholderComponent
} from './image-uploading-placeholder/comment-editor-image-uploading-placeholder.component';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    imageUploadingPlaceholder: {
      /** Add an image */
      addImageUploadingPlaceholder: (options: { src: string, file: File }) => ReturnType
    }
  }
}

interface ImageUploadingPlaceholderOptions {
  uploadFn: ((file: Blob) => Promise<string>) | undefined;
}

const ImageUploadingPlaceholderExtension = (injector: Injector, options: ImageUploadingPlaceholderOptions): Node => {
  return Node.create({
    name: 'imageUploadingPlaceholder',
    draggable: false,
    group: 'block',
    addOptions() {
      return {
        uploadFn: options.uploadFn
      }
    },
    addAttributes() {
      return {
        uploadId: {
          default: ''
        },
        src: {
          default: null
        }
      };
    },
    addCommands() {
      return {
        addImageUploadingPlaceholder: options => ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              src: options.src
            }
          });
        },
      }
    },
    addNodeView() {
      return CommentEditorAngularNodeViewRenderer(CommentEditorImageUploadingPlaceholderComponent, { injector });
    },
    parseHTML() {
      return [
        {
          tag: 'image-uploading-placeholder',
        }
      ]
    },
    renderHTML({ HTMLAttributes }) {
      return [
        'image-uploading-placeholder',  mergeAttributes(HTMLAttributes),
      ];
    }
  })
};

export default ImageUploadingPlaceholderExtension;
