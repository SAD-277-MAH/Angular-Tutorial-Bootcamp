import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  @Input('appTimes') set render(time: number) {
    this.viewContainer.clear();

    for (let i = 0; i < time; i++) {
      this.viewContainer.createEmbeddedView(this.templdate, {
        index: i,
      });
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templdate: TemplateRef<any>
  ) {}
}
