import {Directive, Input} from "@angular/core";

export interface TemplateContext<T> {
  $implicit: T;
}

@Directive({
  selector: '[typeGuard]',
  standalone: true,
})
export class TypeGuardDirective<T> {
  @Input() typeGuard!: T;

  static ngTemplateContextGuard<U>(
    directive: TypeGuardDirective<U>,
    context: unknown,
  ): context is TemplateContext<U> {
    return true;
  }
}
