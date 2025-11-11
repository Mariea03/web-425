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
          </header>

        <div class="sign-in-container">
          <a routerLink="/signin" class="sign-in-link">Sign In</a>
        </div>

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
    </div>`,
      styles:[
        `
        .sign-in-container {
          text-align:right;
          padding-right: 20px;
          margin-top: 10px;
        }

        .sign-in-link {
          color: #988731;
          text-decoration: none;
          font-family:'Funnel Sans', sans-serif;
        }

        .sign-in-link:hover{
          text-decoration:underline;
        }
      `]
  })
  export class AppComponent {}

