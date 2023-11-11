// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from  '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    // Simulate a backend call
    const users: User[] = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      // Add more users as needed
    ];

    return of(users);
  }
}
