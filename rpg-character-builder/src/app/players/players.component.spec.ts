import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PlayersComponent } from './players.component';
import { Character } from '../create-character/create-character.component';
import { CommonModule } from '@angular/common';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PlayersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hould render degault characters', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.character-card').length).toBeGreaterThan(0);
  });

  it('should accept characters via @Input', () => {
    const newCharacters: Character[] = [
      { id: 1, name: 'TestChar', gender: 'Male', class: 'Mage', faction: 'F', startingLocation: 'Loc', funFact: 'fun'}
    ];
    component.characters = newCharacters;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.character-card').length).toBe(1);
    expect(compiled.querySelector('.character-card h2')?.textContent).toContain('TestChar');
  });
  });

