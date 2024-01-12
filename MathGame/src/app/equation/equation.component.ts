import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { Subscription, delay, filter, scan, tap } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css',
})
export class EquationComponent implements OnInit, OnDestroy {
  subManager = new Subscription();

  secondsPerSolution: number = 0;

  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [MathValidators.addition('answer', 'a', 'b')]
  );

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {
    let startTime: Date | undefined;

    this.subManager.add(
      this.mathForm.statusChanges
        .pipe(
          tap(() => {
            if (!startTime && this.mathForm.controls.answer.dirty) {
              startTime = new Date();
            }
          }),
          filter((value) => value === 'VALID'),
          delay(100),
          scan((accumulator, value) => {
            return accumulator + 1;
          }, 0)
        )
        .subscribe((accumulator) => {
          this.secondsPerSolution =
            (new Date().getTime() - startTime!.getTime() - 100) /
            accumulator /
            1000;

          this.mathForm.patchValue({
            a: this.randomNumber(),
            b: this.randomNumber(),
            answer: '',
          });
        })
    );
  }

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
