import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  nombre = '';
  apellido1 = '';
  apellido2 = '';
  email = '';
  nif = '';
  tel = '';
  sexo = '';
  conocePag = '';
  pw = '';
  pwRepe = '';
  terYcond = '';

  sendForm() {
    console.log(this.nombre);
    console.log(this.apellido1);
    console.log(this.apellido2);
    console.log(this.email);
    console.log(this.nif);
    console.log(this.tel);
    console.log(this.sexo);
    console.log(this.conocePag);
    console.log(this.pw);
    console.log(this.pwRepe);
    console.log(this.terYcond);
  }
}
