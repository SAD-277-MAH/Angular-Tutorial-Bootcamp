import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @Input('appClass') set classNames(classObject: any) {
    for (let key in classObject) {
      if (classObject[key]) {
        this.renderer.addClass(this.element.nativeElement, key);
      } else {
        this.renderer.removeClass(this.element.nativeElement, key);
      }
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
