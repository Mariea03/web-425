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
      <h2 class="signin-title">Sign In</h2>

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
      max-width: 450px;
      margin: 60px auto;
      padding: 32px;
      background: linear-gradient(145deg, #1c1b1b, #262626);
      border: 1px solid rgba(255, 216, 168, 0.25);
      border-radius: 18px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.7);
      color: #e9e9e9;
      font-family: 'Funnel Sans', sans-serif;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      color: #f1d7a0;
      letter-spacing: 0.5px;
    }

    input {
      width: 100%;
      padding: 12px;
      margin-bottom: 12px;
      border-radius: 10px;
      border: 1px solid rgba(255, 221, 160, 0.25);
      background: #131313;
      color: f2f2f2;
      font-size: 1rem;
      transition: border 0.25s ease, box-shadow 0.25s ease;
    }

    input:focus {
      border-color: rgba(255, 223, 158, 0.6);
      outline: none;
      box-shadow: 0 0 8px rgba(255, 214, 150, 0.35);
    }

    .error small {
      color: #ff9c9c;
      font-size: 0.85rem;
    }

    button {
      width: 100%;
      padding: 14px;
      border-radius: 12px;
      border: none;
      background: #bfa74b;
      color: 1a1a1a;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
    }

    button:hover:not(:disabled) {
      background: #d7c06a;
      transform: translateY(-3px);
      box-shadow: 0 6px 18px rgba(255, 223, 150, 0.3);
    }

    button:disabed {
      opacity: 0.6;
      cursor: not-allowed;
      background: #8d855e;
    }
  `]

})
export class SigninComponent implements OnInit {
  signinForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.pattern('^(?=.*\\d)[A-Za-z\\d]{6,}$')]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

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
