import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {

  characterInput = input<Character>()
  characterCliked = output<string>();


  emitCharacterClicked() {

    const id = this.characterInput()?.url.split('/')[5]!;

    this.characterCliked.emit(id.toString());

  }

}
