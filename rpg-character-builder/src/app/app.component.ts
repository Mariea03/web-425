import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template:`

  <div class="wrapper">
    <header class="banner">
      <h1>RPG CHARACTER BUILDER</h1>
      <div class="sign-in-container">
        <a routerLink="/signin" class="sign-in-link">Sign In</a>
      </div>
    </header>

    <main class="main-content">

      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Character Faction</a></li>
        </ul>
      </nav>

      <section class="content">
        <router-outlet/>
        </section>
    </main>

    <footer class="footer">
      <nav class="footer-nav">
        <a routerLink="/">Home</a>
        <a routerLink="/players">Players</a>
        <a routerLink="/create-character">Create Character</a>
        <a routerLink="/create-guild">Create Guild</a>
        <a routerLink="/create-faction">Create Faction</a>
      </nav>
      <p>&copy;2025 RPG Character Builder</p>
    </footer>

  </div>
  `,

  styles:[`
      .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: #0f0f0f;
        color: #eee;
        font-family: 'Funnel Sans', sans-serif;
      }

      .banner h1 {
        font-family: 'Nova Flat', sans-serif;
        color: #f8e7c7;
        font-size: 2.2rem;
        letter-spacing: 4px;
        text-shadow: 0 0 12px rgba(255, 228, 160, 0.35);
        margin: 0;
      }

      .sign-in-container {
        position: absolute;
        top: 20px;
        right: 30px;
      }

      .sign-in-link {
        color: #d6c483;
        font-weight: 600;
        text-decortation: none;
        transition: 0.3s ease;
      }

      .sign-in-link:hover {
        color: #f2e2a8;
        text-shadow: 0 0 8px rgba(255, 230, 170, 0.45);
      }

      .main-content {
        flex: 1;
        display: flex;
        padding: 28px;
        gap: 28px;
      }

      .sidebar {
        width: 230px;
        background: rgba(20, 20, 20, 0.9);
        border-radius: 14px;
        padding: 25px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.7);
        border: 1px solid rgba(255, 224,170,0.15);
      }

      .sidebar ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .sidebar li {
        margin-bottom: 14px;
      }

      .sidebar a {
        display: block;
        padding: 10px 14px;
        border-radius: 8px;
        color: #ecd894;
        font-size: 1.05rem;
        text-decoration: none;
        transition: 0.25s ease;
      }

      .sidebar a.active {
        background: #bfa74b;
        color: #111;
        font-weight: 700;
        box-shadow: 0 0 10px rgba(255, 215, 120, 0.5);
      }

      .content {
        flex: 1;
        padding: 30px;
        background: rgba(30,30,30,0.95);
        border-radius: 16px;
        border: 1px solid rgba(255, 224, 170, 0.12);
        box-shadow: 0 10px 25px rgba(0,0,0,0.6);
      }

      .footer {
        background: rgba(20,20,20,0.9);
        padding: 20px;
        text-align: center;
        font-size: 0.95rem;
        border-top: 1px solid rgba(255, 225, 170, 0.15);
      }

      .footer-nav a {
        margin: 0 12px;
        color: #dccb92;
        text-decoration: none;
        transition: 0.2s ease;
      }

      .footer-nav a:hover {
        color: #fff0c4;
        text-shadow: 0 0 6px rgba(255, 220, 160, 0.35);
      }

      @media (max-width: 768px) {
        .main-content {
        flex-direction: column;
        padding: 20px;
      }

      .sidebar {
        width: 100%;
        margin-bottom: 20px;
      }

      .sign-in-container {
        position: static;
        text-align: center;
        margin-top: 10px;
      }
    }
  `]
})
  export class AppComponent {
    title = 'rpg-character-builder';
  }
