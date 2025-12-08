import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateCharacterComponent, Character } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, CreateCharacterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;

    component.characterForm = { reset: jasmine.createSpy('reset') } as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random ID between 1 and 1000', () => {
    const id = component.generateRandomId();
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBe(true);
  });

  it('should add a character correctly', () => {

    spyOn(component, 'generateRandomId').and.returnValue(123);

    component.formData = {
      id:0,
      name: 'Hero',
      gender: 'Male',
      class: 'Warrior',
      faction: 'TestFaction',
      startingLocation: 'TestLoc',
      funFact: 'TestFact'
    };

    const initialLength = component.characters.length;
    component.addCharacter();

    expect(component.characters.length).toBe(initialLength + 1);
    const newChar = component.characters[component.characters.length - 1];
    expect(newChar.name).toBe('Hero');
    expect(newChar.id).toBe(123);
  });

  it('should reset the form', () => {

    component.characterForm = { reset: jasmine.createSpy( 'reset') } as any;

    component.formData = {
      id: 999,
      name: 'Temp',
      gender: 'Female',
      class: 'Mage',
      faction: 'x',
      startingLocation: 'Y',
      funFact: 'Z'
    };

    component.resetForm();

    expect(component.formData.id).toBe(0);
    expect(component.formData.name).toBe('');
    expect(component.formData.gender).toBe('Male');
    expect(component.formData.class).toBe('Warrior');
    expect(component.characterForm.reset).toHaveBeenCalled();
  });
});

