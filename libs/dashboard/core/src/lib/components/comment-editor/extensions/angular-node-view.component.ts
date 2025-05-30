import { Component, Input } from '@angular/core';
import type { NodeViewProps } from '@tiptap/core';

@Component({
  selector: 'emr-angular-node-view',
  standalone: true, template: ''})
export class AngularNodeViewComponent implements NodeViewProps {
  @Input() editor!: NodeViewProps['editor'];
  @Input() node!: NodeViewProps['node'];
  @Input() decorations!: NodeViewProps['decorations'];
  @Input() selected!: NodeViewProps['selected'];
  @Input() extension!: NodeViewProps['extension'];
  @Input() getPos!: NodeViewProps['getPos'];
  @Input() updateAttributes!: NodeViewProps['updateAttributes'];
  @Input() deleteNode!: NodeViewProps['deleteNode'];
  @Input() HTMLAttributes!: Record<string, any>;
  @Input() innerDecorations: any;
  @Input() view: any;
}
