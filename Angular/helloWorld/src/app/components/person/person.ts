import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './person.html',
  styleUrl: './person.css'
})
export class Person { }