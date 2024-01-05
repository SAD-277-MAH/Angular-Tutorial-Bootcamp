import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern(/^[0-9]*$/),
    ]),
    expiration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    cvv2: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(4),
      Validators.pattern(/^[0-9]*$/),
    ]),
  });

  onSubmit() {
    console.log('Form submitted!');
  }

  onReset() {
    this.cardForm.reset();
  }
}
