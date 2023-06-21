import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  @Input('appMyDirective') set backgroundColor(value: string) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      value
    );
  }

  @HostBinding('style.color') color = 'black';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element.nativeElement.style.backgroundColor = 'gray';

    /* this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'gray'
    ); */
  }

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'red'
    );
    this.color = 'blue';
  }

  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
    this.color = 'yellow';
  }

}
