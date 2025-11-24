import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="signin-wrapper">
      <h2>Sign In</h2>

      <form [formGroup]="signinForm" (ngSubmit)="onSubmit()">
        <label for="email">Email</label>
        <input id="email" formControlName="email" type="email" placeholder="you@example.com"/>
        <div class="error" *ngIf="email.invalid && (email.dirty || email.touched)">
          <small *ngIf="email.errors?.['required']">Email is required.</small>
          <small *ngIf="email.errors?.['email']">Enter a valid email.</small>
        </div>

        <label for="password">Password</label>
        <input id="password" formControlName="password" type="password" placeholder="Password"/>
        <div class="error" *ngIf="password.invalid && (password.dirty || password.touched)">
          <small *ngIf="password.errors?.['required']">Password is required.</small>
          <small *ngIf="password.errors?.['pattern']">Password must be at least 6 characters and include a letter and a number.</small>
        </div>

        <button type="submit" [disabled]="signinForm.invalid">Sign In</button>
      </form>
    </div>

   `,

  styles: [`
    .signin-wrapper {
      max-width: 420px;
      margin: 30px auto;
      padding: 24px;
      background: rgba(30,30,30,0.95);
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.6);
      color: #ddd;
      font-family: 'Funnel Sans', sans-serif;
    }

    h2 {
     text-align: center;
     font-family: 'Nova Flat', sans-serif;
     color: #f5f5f5;
     margin-bottom: 18px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
    }

    input {
      width: 100px;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      border: 1px solid #444;
      background: #111;
      color: #eee;
    }

    .error small {
      color: #ffb3b3;
    }

    button {
      width: 100%;
      padding: 12px;
      border-radius: 10px;
      border: none;
      background: #9988731;
      color: #000;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    button: disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    button-hover: not(:disabled) {
      background: #bfa741;
    }

    `]

})
export class SigninComponent implements OnInit {
  signinForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.pattern('^(?=.*\\d)[A-Za-z\\d]{6,}$')]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get email() { return this.signinForm.get('email')!; }
  get password() { return this.signinForm.get('password')!; }

  onSubmit(): void {
    if (this.signinForm.invalid) return;

    const email = this.email.value!;
    const password = this.password.value!;

    if (this.authService.signin(email, password)) {
      this.router.navigate(['/']);
    } else {
      alert('Sign-in failed: invalid email or password. Please try again.');
    }
  }
}
