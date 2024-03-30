import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() inputType: string = 'text';
  @Input() controlType: string = 'input';

  showErrors() {
    const { touched, errors } = this.control;
    return touched && errors;
  }
}
