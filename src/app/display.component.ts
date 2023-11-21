import {Component, Input, TemplateRef} from "@angular/core";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  standalone: true,
  selector: 'greeting',
  template: `
      <ng-container [ngTemplateOutlet]="template"
                    [ngTemplateOutletContext]="{$implicit: data}"/>
  `,
  imports: [
    NgTemplateOutlet
  ],
})
export class DisplayComponent {
  @Input({required: true}) template!: TemplateRef<any>;
  @Input() data: any;
}
