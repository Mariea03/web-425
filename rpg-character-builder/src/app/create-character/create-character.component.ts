import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


export interface Character {
  id: number;
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
  imports: [FormsModule, CommonModule],
  template: `
    <div class="character-wrapper">

      <h2 class="character-title">Create a New Character</h2>

      <form #characterForm="ngForm" (ngSubmit)="addCharacter()" class="character-form">

        <div class="form-group">
          <label>Name:</label>
          <input type="text" name="name" [(ngModel)]="formData.name" required />
        </div>

        <div class="form-group">
          <label>Gender:</label>
          <select name="gender" [(ngModel)]="formData.gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label>Class:</label>
          <select name="class" [(ngModel)]="formData.class">
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Rogue">Rogue</option>
          </select>
         </div>

        <div class="form-group">
          <label>Faction:</label>
          <input type="text" name="faction" [(ngModel)]="formData.faction" />
        </div>

        <div class="form-group">
          <label>Starting Location:</label>
          <input type="text" name="startingLocation" [(ngModel)]="formData.startingLocation" />
        </div>


        <div class="form-group">
          <label>Fun Fact:</label>
          <input type="text" name="funFact" [(ngModel)]="formData.funFact" />
        </div>

        <button type="submit" class="create-btn">Create Character</button>
      </form>

      <hr class="divider" />

      <h3 class="character-subtitle">Created Characters</h3>

      <table *ngIf="characters.length > 0" class="character-table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Faction</th>
          <th>Location</th>
          <th>Fun Fact</th>
        </tr>

        <tr *ngFor="let char of characters">
          <td>{{ char.id }}</td>
          <td>{{ char.name }}</td>
          <td>{{ char.gender }}</td>
          <td>{{ char.class }}</td>
          <td>{{ char.faction }}</td>
          <td>{{ char.startingLocation }}</td>
          <td>{{ char.funFact }}</td>
        </tr>
      </table>
    </div>
  `,

  styles: [`
    .character-wrapper {
      width: 85%;
      max-width: 900px;
      margin: 40px auto;
      padding: 40px;
      background: rgba(20,20,20,0.92);
      border-radius: 18px;
      box-shadow: 0 0 25px rgba(0,0,0,0.7), inset 0 0 12px rgba(217,184,111,0.1);
      backdrop-filter: blur(4px);
      color: #e7e0c5;
    }

    .character-title {
    text-align: center;
    font-family: 'Nova Flat', sans-serif;
    color: #d6b86f;
    font-size: 2rem;
    margin-bottom: 25px;
    text-shadow: 0 0 10px rgba(214,184,111,0.3)
    }

    .character-form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 600;
      margin-bottom: 6px;
      color: #d6b86f;
      letter-spacing: 1px;
      text-shadow: 0 0 6px rgba(214,184,111,0.2);
    }

    input, select {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid rgba(214,184,111,0.3);
      background: rgba(30,30,30,0.9);
      color: #f0e9d2;
      font-size: 1rem;
      transition: all 0.25s ease;
    }

    input:focus, select:focus {
      outline: none;
      border-color: #d6b86f;
      box-shadow: 0 0 12px rgba(214,184,111,0.4);
      background: rgba(40,40,40,0.9);
    }

    .create-btn {
      grid-column: 1 / -1;
      background: linear-gradient(to bottom, #d6b86f, #bfa741);
      color: #1a1a1a;
      padding: 12px 20px;
      border-radius: 10px;
      border: none;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      margin-top: 10px;
      transition: all 0.3s ease;
    }

    .create-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 15px #d6b86f;
    }

    .divder {
      margin: 40px 0;
      border: 0;
      border-bottom: 1px solid rgba(214,184,111,0.3);
    }

    .character-subtitle {
      text-align: center;
      color: #d6b86f;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }

    .character-table {
      width: 100%;
      border-collapse: collapse;
      background: rgba(18,18,18,0.85);
      border-radius: 12px;
      overflow: hidden;
    }

    th,td {
      padding: 12px;
      border: 1px solid rgba(214,184,111,0.25);
    }

    th {
      background: rgba(30,30,30,0.9);
      color: #d6b86f;
      font-weight: bold;
      letter-spacing: 1px;
      text-shadow: 0 0 5px rgba(214,184,111,0.3);
    }

    td {
      background: rgba(40,40,40,0.9);
      color: #e7e0c5;
    }

    tr:hover td {
      background: rgba(55,55,55,0.85)
    }
  `]
})
export class CreateCharacterComponent {
  @Input() characters: Character[] = [];

  formData: Character = {
    id: 0,
    name: '',
    gender: 'Male',
    class: 'Warrior',
    faction: '',
    startingLocation: '',
    funFact: '',
  };

// Generate random Id between 1-100
generateRandomId(): number{
  return Math.floor(Math.random() * 1000) + 1;
  }

addCharacter() {
  const newCharacter: Character = {...this.formData, id: this.generateRandomId() };
  this.characters.push(newCharacter);
  this.resetForm();
}

resetForm() {
  this.formData = {
    id:0,
    name:  '',
    gender: 'Male',
    class: 'Warrior',
    faction: '',
    startingLocation: '',
    funFact: ''
  };
 }
}
