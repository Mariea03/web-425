import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'

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
  imports: [FormsModule],
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
  </div
  `,
  styles: [`
    .container {
      width: 60%;
      margin: auto;
      padding: 20px;
      background: #fafafa;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }

    form {
      display: grid;
      gap: 10px;
      margin-bottom: 20px;
    }

    input, select, button {
      padding: 8px;
      font-size: 1rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 8px;
      border: 1px solid #ddd;
      text-align: left;
    }

    h2,h3 {
       text-align: center;
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
