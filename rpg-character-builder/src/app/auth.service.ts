import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export interface User {
  charId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [

    {charId: 1, email: 'strongwarrior@characterbattles.com', password: 'MyPassword123'},
    {charId: 2, email: 'magicmage@characterbattles.com', password: 'YourPassword321'}
  ];

  private authState = new BehaviorSubject<boolean>(false);

  constructor(private cookieService: CookieService, private router: Router) {
    const session = this.cookieService.get('session_user');
    this.authState.next(!!session);
   }


   getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
   }

   getCurrentUser(): string {
    return this.cookieService.get('session_user') || '';
   }


   signin(email: string, password: string): boolean {
    const found = this.users.find(u => u.email === email && u.password === password);
    if (found) {

      this.cookieService.set('session_user', found.email, undefined, '/');
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
   }

   signout(): void {
    this.cookieService.deleteAll('/');
    this.authState.next(false);
    this.router.navigate(['/signin'])
   }
}
