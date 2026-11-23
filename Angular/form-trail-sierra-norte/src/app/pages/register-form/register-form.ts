import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {

  registerForm = new FormGroup({
    nombreCompleto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50),
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)]),
    modalidad: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(85)]),
    cod: new FormControl('', [Validators.required, Validators.pattern(/^FED-\d{4}$/)]),
    obs: new FormControl('', Validators.maxLength(200)),
    condiciones: new FormControl('', Validators.requiredTrue),
    gps: new FormControl('')
  });

  nameChange = output<string>();

  isInvalid(elemento: string) {

    return this.registerForm.get(elemento)?.hasError && (this.registerForm.get(elemento)?.touched || this.registerForm.get(elemento)?.dirty)

  }

}
