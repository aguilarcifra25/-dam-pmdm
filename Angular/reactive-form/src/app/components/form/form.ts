import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIcon, provideIcons } from '@ng-icons/core';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDatepickerModule, NgIcon],
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {
  title = new FormControl('');
  description = new FormControl('');
  category = new FormControl('');
  tags = new FormControl('');
  email = new FormControl('');
  date = new FormControl('');
}