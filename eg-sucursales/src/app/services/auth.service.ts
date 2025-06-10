import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:44374/api/Auth'; // Ajustar si es necesario

  constructor(private http: HttpClient, private router: Router) {}

  login(loginData: { correo: string; clave: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
