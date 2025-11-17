import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="players-container">
      <h1>Players</h1>
      <div class="characters-grid">
        <div class="character-card" *ngFor="let character of characters" data-testid="character-card">
          <h2>{{ character.name }}</h2>
          <p><strong>Gender:</strong> {{ character.gender }}</p>
          <p><strong>Class:</strong> {{ character.class }}</p>
          <p><strong>Faction:</strong> {{ character.faction }}</p>
          <p><strong>Location:</strong> {{ character.startingLocation }}</p>
          <p><strong>Fun Fact:</strong> {{ character.funFact }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .players-container {
      padding: 20px;
    }
    .characters-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    .character-card {
      flex: 0 1 calc(33.33% - 20px);
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(224,219,193,1);
      background: #eae7d6;
    }
    `]
})
export class PlayersComponent {
  @Input() characters: Character[] = [
    {
      id: 1,
      name: "Hunt",
      gender: "Male",
      class: "Warrior",
      faction: "Emberwake",
      startingLocation: "Whispering Shadows",
      funFact: "Hunt wrestled a bear once and survived."
    },
     {
      id: 2,
      name: "Slither",
      gender: "Female",
      class: "Rouge",
      faction: "Thornewatch",
      startingLocation: "Crystal City",
      funFact: "Slither has never been caught in a heist."
    },
     {
      id: 3,
      name: "Dwan",
      gender: "Other",
      class: "Mage",
      faction: "Nightveil",
      startingLocation: "Dark Alley",
      funFact: "Dwan brews magical potions in their sleep."
    },
     {
      id: 4,
      name: "Newt",
      gender: "Male",
      class: "Warrior",
      faction: "Frostborne",
      startingLocation: "Moonspire",
      funFact: "Newt single handedly defeated a dragon."
    },
     {
      id: 5,
      name: "Wilma",
      gender: "Female",
      class: "Mage",
      faction: "Nightveil",
      startingLocation: "Crystal City",
      funFact: "Wilma can read the stars to predict events."
    },
     {
      id: 6,
      name: "Blane",
      gender: "Male",
      class: "Rouge",
      faction: "Emberwake",
      startingLocation: "Moonspire",
      funFact: "Blane can pick locks with a single hand."
    },
     {
      id: 7,
      name: "Stacker",
      gender: "Female",
      class: "Mage",
      faction: "Thornwatch",
      startingLocation: "Whispering Shadows",
      funFact: "Stacker can memorize an entire spell book overnight."
    },
     {
      id: 8,
      name: "Archer",
      gender: "Male",
      class: "Warrior",
      faction: "Frostborne",
      startingLocation: "Dark Alley",
      funFact: "Archer has a tattoo for every battle he fought."
    },
     {
      id: 9,
      name: "Stathis",
      gender: "Other",
      class: "Warrior",
      faction: "Nightveil",
      startingLocation: "Crystal City",
      funFact: "Stathis never misses a shadow step."
    },
     {
      id: 10,
      name: "Snootles",
      gender: "Male",
      class: "Mage",
      faction: "Emberwake",
      startingLocation: "Moonspire",
      funFact: "Snootles can speak to spirits of the forest."
    }
  ];
}

