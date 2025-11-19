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
      color: #ddd;
      font-family: 'Funnel Sans', sans-serif;
    }

    h1 {
      text-align: center;
      font-family: 'Nova Flat', sans-serif;
      margin-bottom: 30px;
      color: #f5f5f5;
    }

    .characters-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .character-card {
      flex: 0 1 300px;
      background: rgba(40, 40, 40, 0.9);
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    character-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.6);
    }

    character-card h2 {
      font-family: 'Viaoda Libre', serif;
      margin-bottom: 10px;
      color: #f5f5f5;
    }

    .character-card p {
      margin: 5px 0;
    }

    @media (max-width: 768px) {
      .character-card {
        flex: 1 1 100%;
      }
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

