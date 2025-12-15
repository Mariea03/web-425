import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface CharacterFaction {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="faction-container">
      <h1>Character Factions</h1>

      <p *ngIf="errorMessage" class="error">
        {{ errorMessage }}
      </p>

      <table *ngIf="factions.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Faction</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let faction of factions">
            <td>{{ faction.id }}</td>
            <td>{{ faction.name }}</td>
            <td>{{ faction.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .faction-container {
      padding: 40px;
      color: #e7e7e7;
      min-height: 100vh;
    }

    h1 {
      text-align: center;
      color: #d6b86f;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: rgba(25,25,25,0.9);
    }

    th, td {
      padding: 12px;
      border: 1px solid rgba(214,184,111,0.3);
    }

    th {
      background: rgba(35,35,35,0.9);
      color: #d6b86f
    }

    td {
      color: #e7e0c5;
    }

    .error {
      text-align: center;
      color: #ff6b6b;
      font-weight: bold;
    }
  `]
})

export class CharacterFactionComponent implements OnInit {

  factions: CharacterFaction[] = [];
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadFactions();
  }

  loadFactions(): void {
    this.http.get<CharacterFaction[]>(
      'http://localhost:3000/api/character-factions'
  ).subscribe({
      next: data => this.factions = data,
      error: () => {
        this.errorMessage =
        'Unable to load factions. Please ensure the server is running.';
      }
    });
  }
}
