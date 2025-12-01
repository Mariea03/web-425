import { Component } from '@angular/core';
import { RouterLink }from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-wrapper">

    <section class="hero">
      <h1 class="hero-title">Forge Your Legend</h1>
      <p class="hero-subtitle">Craft heroes, shape worlds, and bring destiny to life.</p>
    </section>

    <main class="home-content">

      <!-- Feature 1 -->
      <div class="feature-card">
        <img src="/ork.svg" alt="RPG Character" class="feature-img"/>

        <p class="feature-text">
          Start your own adventure with characters you design from the ground up.
          Create heroes, villains, or legends worth remembering with ease and creativity.
          With this all-in-one web tool, you can craft, customize, and track your ultimate
          persona and bring your imagination to life in vivid detail. Whether you're building
          for a tabletop campaign, a digital story, or your next epic quest, this tool gives
          you everything you need to make your world feel alive.
        </p>

        <p class="feature-text">
         Generic presets and cookie cutter characters are a thing of the past. Here, you have full
         control of all the character assets from naming your character, defining its structure, to
         adding your characters gear and abilities. This sleek and interactive tool makes creating
         a character just as exciting as playing one, while giving you an immersive experience from
         the very first click.
        </p>


        <button class="feature-btn" routerLink="/create-character">
          Create Your Character
        </button>
      </div>

    <!-- Feature 2 -->
    <div class="feature-card">
      <img src="/rpg_character_hunter.svg" alt="RPG Character Hunter" class="feature-img"/>

        <p class="feature-text">
         Whether you are a professional gamemaster, a developer or experimenting with your first
         design, this builder has you covered. You can save, edit, and export your creations at
         any time. Keep your fantasy world organized, flexible and ready for whatever challenge
         or storyline awaits you.
        </p>

        <button class="feature-btn" routerLink="/players">
          Explore Characters
        </button>
      </div>

      <!-- Feature 3 -->
      <div class="feature-card">
      <img src="/hooded-eyes.svg" alt="Fantasy Emblem" class="feature-img"/>

       <p class="feature-text">
         This app delivers with speed, style, and deep customization. Expect smooth visuals, responsive
         design, and a rich user experience that adapts to your creative flow. More than just a
         utility, this is a creative hub. A space where imagination thrives, stories take shape, and
         every character tells a tale worth sharing. Rediscover what makes RPG's timeless: the
         freedom to explore, create, and become anyone you dream to be.
       </p>

       <button class="feature-btn" routerLink="/create-character">
          Start Your Quest
       </button>
      </div>

    </main>

  </div>

  `,
  styles: [`

    .hero {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
    }

    .home-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center
    }

    .home-wrapper {
      width: 100;
      padding: 40px 20px;
    }

    .feature-card {
      flex: 0 1 300px;
      background: rgba(20, 20, 20, 0.88);
      border: 2px solid rgba(155, 130, 50, 0.35);
      box-shadow: 0 0 25px rgba(0,0,0,0.7);
      border-radius: 18px;
      padding: 25px;
      text-align: center;
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 0 35px rgba(155,130,50,0.45);
    }

    .feature-img {
      width: 75%;
      margin-bottom: 15px;
      filter: drop-shadow(0 0 10px rgba(255,215,100,0.3));
    }

    .feature-text {
      color: #ddd;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .feature-btn {
      background: linear-gradient(to bottom, #d1b45a, #8d742c);
      border: none;
      padding: 12px 22px;
      border-radius: 10px;
      font-weight: 700;
      color: #000;
      cursor: pointer;
      margin-top: 10px;
      letter-spacing: 1px;
      transition: all 0.3s ease;
    }

    .feature-btn:hover {
      background: linear-gradient(to bottom, #e5c97f, #a88e3e);
      box-shadow: 0 0 12px rgba(220,200,120,0.6);
      transform: translateY(-3px);
    }
  `]
})
export class HomeComponent {}
