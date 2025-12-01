import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test: Form invalid when empty
  it('should have an invalid form when empty', () => {
    expect(component.guildForm.valid).toBeFalse();
  });

  // Test: Accept Terms Required
  it('should require acceptTerms to be checked', () => {
    component.guildForm.patchValue({
      guildName: 'Elites',
      description: 'The Best Guild',
      type: 'Competitive',
      notificationPreference: 'Email',
      acceptTerms: false
    });

    expect(component.guildForm.valid).toBeFalse();

    component.guildForm.patchValue({ acceptTerms: true});

    expect(component.guildForm.valid).toBeTrue();
  });

  // Test: Submit Adds a Guild

  it('should add a guild on valid submit', () => {
    component.guildForm.patchValue({
      guildName: 'Hammer Down',
      description: 'Strong guild',
      type: 'Casual',
      notificationPreference: 'SMS',
      acceptTerms: true
    });

    component.onSubmit();

    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0].guildName).toBe('Hammer Down');
  });

});
