import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>RPG Character Builder</h1>
      <h2>Bring your characters to life!</h2>
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
        <img src="/ork.svg" alt="Image of RPG Character" width="300" height="100"/>
        <p>
          Generic presets and cookie cutter characters are a thing of the past. Here, you have full
         control of all the character assets from naming your character, defining its structure, to
         adding your characters gear and abilities. This sleek and interactive tool makes creating
         a character just as exciting as playing one, while giving you an immersive experience from
         the very first click.
        </p>
        </div>

      <div class="highlight">
        <img src="/rpg_character_hunter.svg" alt="Image of vector RPG Character Hunter" width="110" height="100"/>

        <p>
       Whether you are a professional gamemaster, a developer or experimenting with your first
        design, this builder has you covered. You can save, edit, and export your creations at
         any time. Keep your fantasy world organized, flexible and ready for whatever challenge
         or storyline awaits you.
        </p>
      </div>

      <div class="highlight">
      <img src="/hooded-eyes.svg" alt="Image of a vector sword and shield" width="400" height="100"/>
      <p>
      This app delivers with speed, style, and deep customization. Expect smooth visuals, responsive
       design, and a rich user experience that adapts to your creative flow. More than just a
        utility, this is a creative hub. A space where imagination thrives, stories take shape, and
         every character tells a tale worth sharing. Rediscover what makes RPG's timeless: the
          freedom to explore, create, and become anyone you dream to be.
      </p>
      </div>
    </div>
  </div>
  `, styles: [
    `
    .highlights-container{
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    }

    .highlight{
    text-align: center;
    flex: 0 1 calc(33.333% - 20px);
    box-sizing: border-box;
    }

    .highlight img{
    max-width: 100%;
    height:auto;
    object-fit: cover;
    }

    .highlight p{
    margin-top: 10px;
    }
    `
  ]
})
export class HomeComponent {

}
