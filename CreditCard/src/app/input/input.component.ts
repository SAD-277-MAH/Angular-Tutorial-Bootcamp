import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() mask: string = '';
  @Input() leadZeroDateTime: boolean = false;
  @Input() showMaskTyped: boolean = false;
  @Input() specialCharacters: string[] = [];
  @Input() shownMaskExpression: string = '';
  @Input() dropSpecialCharacters: boolean = false;

  showErrors() {
    const { touched, errors } = this.control;
    return touched && errors;
  }
}
