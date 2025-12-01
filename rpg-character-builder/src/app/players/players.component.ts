import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="players-container">
      <h1 class="players-title">Player Roster</h1>

      <div class="characters-grid">
        <div class="character-card" *ngFor="let character of characters" data-testid="character-card">
          <h2 class="char-name">{{ character.name }}</h2>

          <div class="char-info">
            <p><strong>Gender:</strong> {{ character.gender }}</p>
            <p><strong>Class:</strong> {{ character.class }}</p>
            <p><strong>Faction:</strong> {{ character.faction }}</p>
            <p><strong>Location:</strong> {{ character.startingLocation }}</p>
            <p><strong>Fun Fact:</strong> {{ character.funFact }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .players-container {
      padding: 40px;
      color: #e7e7e7;
      font-family: 'Funnel Sans', sans-serif
      min-height: 100vh;
    }

    .players-title {
      text-align: center;
      font-family: 'Nova Flat', sans-serif;
      margin-bottom: 40px;
      color: #f8e9c6;
      letter-spacing: 2px;
      text-shadow: 0 0 12px rgba(255, 222, 140,0.3);
    }

    .characters-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
      justify-content: center;
    }

    .character-card {
      background: linear-gradient(145deg, #1e1e1e, #2b2b2b);
      border: 1px solid rgba(255, 215, 165, 0.2);
      border-radius: 18px;
      padding: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.6);
      transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
    }

    .character-chard:hover {
      transform: translateY(-6px);
      border: 1px solid rgba(255, 215, 165, 0.45);
      box-shadow: 0 15px 35px rgba(0,0,0,0.75), 0 0 15px rgba(255, 224, 154, 0.25);
    }

    .char-name {
      font-family: 'Viaoda Libre', serif;
      font-size: 1.6rem;
      color: #f8e8c0;
      margin-bottom: 10px;
      text-shadow: 0 0 8px rgba(255, 210, 150, 0.35);
      }

    .char-info p {
      margin: 6px 0;
      font-size: 0.95rem;
      color: #d4d4d4;
    }

    strong {
      color: #f1d7a0;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .players-container: {
        padding: 20px;
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

