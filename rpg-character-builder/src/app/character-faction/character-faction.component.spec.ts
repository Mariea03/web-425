import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpMock: HttpTestingController;

  const mockFactions = [
    { id: 1, name: 'Brass Monkey', description: 'Ready for a good time.'},
    { id: 2, name: 'Sabotage', description: 'Always planning the next scheme'}
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterFactionComponent, HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load factions from the API', () => {
      component.ngOnInit();

    const req = httpMock.expectOne('http://localhost:4200/api/character-factions');
    expect(req.request.method).toBe('GET');

    req.flush(mockFactions);

    expect(component.factions.length).toBe(2);
    expect(component.factions[0].name).toBe('Brass Monkey');
    expect(component.errorMessage).toBe('');
  });

  it('should show an error message when the API fails', () => {
    component.ngOnInit();

    const req = httpMock.expectOne('http://localhost:4200/api/character-factions');

    req.flush('Server error', { status: 500, statusText: 'Server Error'});

    expect(component.factions.length).toBe(0);
    expect(component.errorMessage).toContain('Unable to load factions');
  });
});
