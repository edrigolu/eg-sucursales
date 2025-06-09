import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:5001/api/auth'; // ajustar si se usa otro puerto

  constructor(private http: HttpClient) {}

  login(correo: string, clave: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo, clave }).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('rol', response.rol);
      })
    );
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get rol(): string | null {
    return localStorage.getItem('rol');
  }

  logout(): void {
    localStorage.clear();
  }
}
