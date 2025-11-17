import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ActivatedRoute }from '@angular/router';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [FormsModule, CreateCharacterComponent],
    declarations: [AppComponent],
    providers: [
      {provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => null } } } }
    ]
  }).compileComponents();
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'rpg-character-builder' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rpg-character-builder');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, rpg-character-builder');
  });

