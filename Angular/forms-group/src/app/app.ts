import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from './components/form/form';

@Component({
  imports: [RouterOutlet, Form],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('forms-group');
}
