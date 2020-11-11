import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Character, CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() selectedCharacter: Character;
  characters: Character[];
  err: string;
  pageTitle: string;
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: characters => {
        this.characters = characters;
        console.log(this.characters);
      },
      error: err => { this.err = err; }
    });
  }

  onRatingClicked(character: Character): void {
    this.pageTitle = 'Character list: ' + character.name;
  }
  selected(selectedCharacter): void {
    this.selectedCharacter = selectedCharacter;
  }
}
