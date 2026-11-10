import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {

  date = false

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    tags: new FormControl(''),
    email: new FormControl(''),
    publishOtherDay: new FormControl(''),
    publishDate: new FormControl('')
  });

  mostrarDate() {

    this.date = !this.date

  }

  enviar() {

    if (!this.date) {

      this.form.patchValue({

        publishDate: ""

      })

    }

    console.log(this.form);

  }

}
