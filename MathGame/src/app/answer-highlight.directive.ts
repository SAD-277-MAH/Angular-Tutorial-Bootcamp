import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription, map } from 'rxjs';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnInit, OnDestroy {
  subManager = new Subscription();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private controlEl: NgControl
  ) {}

  ngOnInit(): void {
    const formGroup = this.controlEl.control?.parent;

    this.subManager.add(
      formGroup?.valueChanges
        .pipe(
          map(({ a, b, answer }) => {
            if (answer) {
              return Math.abs(a + b - answer);
            } else {
              return 17;
            }
          }),
          map((value: number) => {
            if (value > 17) {
              return 17;
            } else {
              return value;
            }
          }),
          map((value: number) => value * 15)
        )
        .subscribe((value) => {
          console.log(value);
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            `rgb(${value}, 255, ${value})`
          );
        })
    );
  }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
