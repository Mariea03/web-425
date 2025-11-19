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
    <div class="container">
     <h2>Create a New Character</h2>

     <form #characterForm="ngForm" (ngSubmit)="addCharacter()">

     <label>Name:</label>
     <input type="text" name="name" [(ngModel)]="formData.name" required />

     <label>Gender:</label>
     <select name="gender" [(ngModel)]="formData.gender">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
     </select>

     <label>Class:</label>
     <select name="class" [(ngModel)]="formData.class">
      <option value="Warrior">Warrior</option>
      <option value="Mage">Mage</option>
      <option value="Rogue">Rogue</option>
     </select>

     <label>Faction:</label>
     <input type="text" name="faction" [(ngModel)]="formData.faction" />

     <label>Starting Location:</label>
     <input type="text" name="startingLocation" [(ngModel)]="formData.startingLocation" />

     <label>Fun Fact:</label>
     <input type="text" name="funFact" [(ngModel)]="formData.funFact" />

     <button type="submit">Create Character</button>
     </form>

     <hr />

     <h3>Created Characters</h3>

     <table *ngIf="characters.length > 0">
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
    .container {
      width: 80%;
      margin: 30px auto;
      padding: 30px;
      background: rgba(30,30,30,0.9);
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      color: #ddd;
      font-family: 'Funnel Sans', sans-serif;
    }

    h2, h3 {
      text-align: center;
      font-family: 'Nova Flat', sans-serif;
      color: #f5f5f5;
      margin-bottom: 20px;
    }

    form {
      display: grid;
      gap: 15px;
      margin-bottom: 25px;
    }

    label {
      font-weight: 600;
      margin-bottom: 5px;
    }

    input, select {
      padding: 10px;
      font-size: 1rem;
      border-radius: 8px;
      border: none;
      outline: none;
    }

    input:focus,
    select:focus {
      box-shadow: 0 0 8px #988731;
      background-color: #222;
      color: #f5f5f5;
    }

    button{
      background-color: #988731;
      color: #000;
      font-weight: 600;
      padding: 12px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transitions: all 0.3s ease;
    }


    button:hover {
      background-color: #bfa741;
      box-shadow: 0 0 10px #bfa741;
      transform: translateY(-3px);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 10px;
      border: 1px solid #444;
      text-align: left;
    }

    th {
      background-color: #222;
      color: #f5f5f5;
    }

    td {
      background-color: rgba(40,40,40,0.9);
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
