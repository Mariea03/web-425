import { Component } from '@angular/core';
import { RouterLink }from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <header class="banner">
       <h1>RPG Character Builder</h1>
       <h2>Bring your characters to life!</h2>
      </header>

     <main class="content">
      <p>
            Start your own adventure with characters you design from the ground up.
           Create heroes, villains, or legends worth remembering with ease and creativity.
            With this all-in-one web tool, you can craft, customize, and track your ultimate
             persona and bring your imagination to life in vivid detail. Whether you're building
              for a tabletop campaign, a digital story, or your next epic quest, this tool gives
              you everything you need to make your world feel alive.
      </p>

      <div class="highlights-container">
       <div class="highlight">
        <img src="/ork.svg" alt="Image of RPG Character" width="300" height="200"/>

        <p>
         Generic presets and cookie cutter characters are a thing of the past. Here, you have full
         control of all the character assets from naming your character, defining its structure, to
         adding your characters gear and abilities. This sleek and interactive tool makes creating
         a character just as exciting as playing one, while giving you an immersive experience from
         the very first click.
        </p>
        <button class="highlight-btn" routerLink="/create-character">Create Your Character></button>
      </div>

      <div class="highlight">
        <img src="/rpg_character_hunter.svg" alt="Image of vector RPG Character Hunter" width="110" height="200"/>

        <p>
         Whether you are a professional gamemaster, a developer or experimenting with your first
         design, this builder has you covered. You can save, edit, and export your creations at
         any time. Keep your fantasy world organized, flexible and ready for whatever challenge
         or storyline awaits you.
        </p>
        <button class="highlight-btn" routerLink="/players">Explore Characters</button>
      </div>

      <div class="highlight">
      <img src="/hooded-eyes.svg" alt="Image of a vector sword and shield" width="400" height="200"/>

       <p>
         This app delivers with speed, style, and deep customization. Expect smooth visuals, responsive
         design, and a rich user experience that adapts to your creative flow. More than just a
         utility, this is a creative hub. A space where imagination thrives, stories take shape, and
         every character tells a tale worth sharing. Rediscover what makes RPG's timeless: the
         freedom to explore, create, and become anyone you dream to be.
       </p>
       <button class="highlight-btn" routerLink="/create-character">Start Your Quest</button>
      </div>
    </div>

  `, styles: [
    `
    .highlights-container{
     display: flex;
     flex-wrap: wrap;
     gap: 20px;
     justify-content: center;
     margin-top: 30px;
    }

    .highlight{
     flex: 0 1 300px;
     background: rgba(40,40,40,0.9);
     padding: 20px;
     border-radius: 15px;
     box-shadow: 0 5px 15px rgba(0,0,0,0.4);
     transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .highlight:hover{
     transform: translateY(-5px);
     box-shadow: 0 10px 25px rgba(0,0,0,0.6);
    }

    .highlight img{
     max-width: 80%;
     border-radius: 10px;
     margin-bottom: 15px;
    }

    .highlight-btn {
     background-color: #988731;
     border: none;
     padding: 10px 20px;
     color: #000;
     font-weight: 600;
     border-radius: 8px;
     cursor: pointer;
     transition: all 0.3s ease;
    }

    .highlight-btn:hover {
     background-color: #bfa741;
     box-shadow: 0 0 10px #bfa741;
     transform: translateY(-3px);
    }

    /* Responsive tweak component */
    @media (max-width: 768px) {
     .highlights-container { flex-direction: column; align-items: center; }
     .highlight { flex: 1 1 100%; }
    }
  `]
})
export class HomeComponent {}
