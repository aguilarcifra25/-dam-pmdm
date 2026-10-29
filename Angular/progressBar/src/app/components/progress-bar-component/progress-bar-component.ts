import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap/progressbar';

@Component({
  imports: [NgbProgressbar, FormsModule],
  selector: 'app-progress-bar-component',
  styleUrl: './progress-bar-component.css',
  templateUrl: './progress-bar-component.html',
})
export class ProgressBarComponent {

  value = 0
  inputValue = 0

  type = 'success'
  inputType = ''

  showValue = false
  inputShowValue = false

  sendForm() {

    this.value = this.inputValue
    this.type = this.inputType

  }

}
