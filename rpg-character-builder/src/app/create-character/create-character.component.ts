import { Component } from '@angular/core';

export interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rouge';
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [],
  template: `
    <p>
      create-character works!
    </p>
  `,
  styles: ``
})
export class CreateCharacterComponent {
  name: '';
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
  faction: '';
  startingLocation: '';
  funFact: '';

  constructor() {
    this.name = '';
    this.gender = 'Male';
    this.class = 'Warrior';
    this.faction = '';
    this.startingLocation = '';
    this.funFact = '';
  }
}
