import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Guild {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference: string;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <h1>Create a New Guild</h1>

    <form [formGroup]="guildForm" (ngSubmit)="onSubmit()">
      <label>Guild Name</label>
      <input type="text" formControlName="guildName" />

      <label>Description</label>
      <textarea formControlName="description"></textarea>

      <label>Guild Type</label>
      <select formControlName="type">
        <option value="">-- Select Type --</option>
        <option>Competitive</option>
        <option>Casual</option>
        <option>Social</option>
        <option>Educational</option>
      </select>

      <label>Notification Preference</label>
      <div class="radio-group">
        <label><input type="radio" value="Email" formControlName="notificationPreference" /> Email</label>
        <label><input type="radio" value="SMS" formControlName="notificationPreference" /> SMS</label>
        <label><input type="radio" value="In-App" formControlName="notificationPreference" /> In-App</label>
      </div>

      <label class="terms">
        <input type="checkbox" formControlName="acceptTerms" />
        Accept Terms & Conditions
      </label>

      <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
    </form>

    <hr />

    <h2>Created Guilds</h2>

    <ul *ngIf="guilds.length > 0">
      <li *ngFor="let g of guilds">
        <strong>{{ g.guildName }}</strong> - {{ g.type }}
        <p> {{ g.description }}</p>
        <small>Notification: {{ g.notificationPreference }}</small>
      </li>
    </ul>

  `,
  styles: [`
    form {
      display: grid;
      gap: 12px;
      max-width: 500px;
      padding: 16px;
      background: #1e1e2f;
      color: #fff;
      border-radius: 12px;
    }

    input, textarea, select {
      padding: 8px;
      border-radius: 6px;
      border: 1px solid #444;
      background: #2b2b3d;
      color: white;
    }

    button {
      padding: 10px;
      border-radius: 8px;
      background: #6a5acd;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: bold;
    }

    button[disabled] {
      background: #444;
      cursor: not-allowed;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #2b2b3d;
      padding: 12px;
      margin-bottom: 8px;
      border-radius: 8px;
      color: white;
    }

    .radio-group {
      display: flex;
      gap: 12px;
    }

    .terms {
      margin-top: 10px;
    }
    `]
})
export class CreateGuildComponent {

  guildForm!: FormGroup;
  guilds: Guild[] = [];

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: ['false', Validators.requiredTrue],
      notificationPreference: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.guildForm.invalid) return;

    this.guilds.push(this.guildForm.value);
    this.guildForm.reset();
  }
}
