import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.template, {});
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
}
