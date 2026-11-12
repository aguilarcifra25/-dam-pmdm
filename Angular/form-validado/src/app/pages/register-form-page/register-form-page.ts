import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form-page',
  styleUrl: './register-form-page.css',
  templateUrl: './register-form-page.html',
})
export class RegisterFormPage {

  registerForm = new FormGroup({

    nombre: new FormControl('', [Validators.required, Validators.minLength(2),
    Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]),

    apellidos: new FormControl('', [Validators.required, Validators.minLength(2),
    Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+$')]),

    dni: new FormControl('', [Validators.required,
    Validators.pattern('^(\d{8}[A-Za-z]|[XYZxyz]\d{7}[A-Za-z])$')]),

    tel: new FormControl('', [Validators.required, Validators.pattern(/^(\+34)?[67]\d{8}$/)]),

    usuario: new FormControl('', [Validators.required, Validators.minLength(4),
    Validators.maxLength(15), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),

    email: new FormControl('', [Validators.required, Validators.email]),

    pw: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20),
    Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/')]),

    cursoInteres: new FormControl('', Validators.required),

    horasSemana: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),

    codigoPostal: new FormControl('', [Validators.required, Validators.pattern('^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$')])

  });

}
