import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    userName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[^a-zA-Zd]).+$/),
    ]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });

  signUp() {
    console.log(this.registerForm);
  }
}
