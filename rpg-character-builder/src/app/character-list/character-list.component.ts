import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
}
