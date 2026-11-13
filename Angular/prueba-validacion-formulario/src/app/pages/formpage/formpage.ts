import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formpage',
  styleUrl: './formpage.css',
  templateUrl: './formpage.html',
})
export class Formpage {

  registerForm = new FormGroup({

    nombre: new FormControl('', [Validators.required, Validators.minLength(2),
    Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),

    apellidos: new FormControl('', [Validators.required, Validators.minLength(2),
    Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),

    tel: new FormControl('', [Validators.required, Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    nombreMascota: new FormControl('', [Validators.required, Validators.minLength(2),
    Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),

    especie: new FormControl('', Validators.required),

    sexo: new FormControl('', Validators.required),

    raza: new FormControl('', Validators.maxLength(40)),

    edadAnios: new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),

    peso: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(90)]),

    numMicrochip: new FormControl('', [Validators.required, Validators.pattern('/^\d{15}$/')]),

    pw: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(24),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]),

    motivoPrimeraVisita: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),

    politicaPrivacidad: new FormControl('', Validators.requiredTrue),

    recordatorioEmail: new FormControl(''),
  });

  isInvalid(campo: string) {

    return this.registerForm.get(campo)?.invalid && (this.registerForm.get(campo)?.touched || this.registerForm.get(campo)?.dirty)

  }

}
