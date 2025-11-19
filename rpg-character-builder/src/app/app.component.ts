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
        .wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #111;
          color: #ddd;
        }

        .banner {
          text-align: center;
          padding: 20px;
          font-family: 'Nova Flat', sans-serif;
          background: rgba(0,0,0,0.8);
        }

        .sign-in-container {
          text-align:right;
          padding-right: 10px, 30px;
        }

        .sign-in-link {
          color: #988731;
          font-family:'Funnel Sans', sans-serif;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .sign-in-link:hover{
          text-decoration:underline;
          color: #bfa741;
        }

        .main-content {
          display: flex;
          flex: 1;
          padding: 20px;
          gap: 20px;
        }

        .navbar {
          flex: 0 0 220px;
          background-color: rgba(0,0,0,0.8);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }

        .navbar ul {
          list-style-type: none;
          padding: 0;
        }

        .navbar li {
          margin-bottom: 12px;
        }

        .navbar li a {
          text-decoration: none;
          color: #d4c66c;
          font-family: 'Funnel Sans', sans-serif;
          font-weight: 500;
          display: block;
          padding: 8px 12px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .navbar li a:hover .navebar li a.active{
          background-color: #988731;
          color: #000;
          box-shadow: 0 0 10px #988731;
        }

        .content {
          flex: 1;
          padding: 30px;
          background: rgba(30,30,30,0.9);
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
          overflow: visible;
        }

        .footer {
          text-align: center;
          padding: 15px 20px;
          background: rgba(0,0,0,0.8);
          font-family:'Funnel Sans', sans-serif;
        }

        .footer-nav a{
          color: #d4c66c;
          margin: 0 10px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-nav a:hover, .footer-nav a.active {
          color: #000;
        }

        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
          }

          .navbar {
            width: 100%;
            margin-bottom: 20px;
            border-radius: 10px;
          }

          .sign-in-container {
            text-align: center;
            padding: 10px 0;
          }
        }
      `]
  })
  export class AppComponent {
    title = 'rpg-character-builder';
  }
