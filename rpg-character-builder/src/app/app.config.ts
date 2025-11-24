import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template:`
  <div class="wrapper">
    <header class="banner">
      <h1>RPG CHARACTER BUILDER</h1>
    </header>

  <div class="sign-in-container">
    <ng-container *ngIf="isAuthenticated; else showSignIn">
      <span class="welcome">Welcome {{ currentUser }}</span>
      <button class="signout-btn" (click)="signout()">Sign out</button>
    </ng-container>

    <ng-template #showSignIn>
      <a routerLink="/signin" class="sign-in-link">Sign In</a>
    </ng-template>
  </div>

  <main class="main-content">
    <nav class="navbar">
      <ul>
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
        <li><a routerLink="/players" routerLinkActive="active">Players</a></li>
        <li><a routerLink="/create-character" routerLinkActive="active">Create Character</a></li>
        <li><a routerLink="/create-guild" routerLinkActive="active">Create Guild</a></li>
        <li><a routerLink="/create-faction" routerLinkActive="active">Create Faction</a></li>
      </ul>
    </nav>

    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>

  <footer class="footer">
    <nav class="footer-nav">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
      <a routerLink="/players" routerLinkActive="active">Players</a>
      <a routerLink="/create-character" routerLinkActive="active">Create Character</a>
      <a routerLink="/create-guild" routerLinkActive="active">Create Guild</a>
      <a routerLink="/create-faction" routerLinkActive="active">Create Faction</a>
    </nav>
    <p>&copy;2025 RPG Character Builder</p>
  </footer>
</div>

  `,


})

export class AppComponent implements OnInit {
  isAuthenticated = false;
  currentUser = '';

  constructor(private authService: AuthService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.authService.getAuthState().subscribe((state) => {
      this.isAuthenticated = state;
      this.currentUser = state ? this.authService.getCurrentUser() : '';
    });

    if (this.cookieService.check('session_user')) {
      this.isAuthenticated = true;
      this.currentUser = this.authService.getCurrentUser();
    }
  }

  signout(): void {
    this.authService.signout();
  }
}
