import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegistroUsuarioDto {
  nombreCompleto: string;
  correo: string;
  clave: string;
  idRol: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl = 'https://localhost:5001/api/usuarios'; // Ajusta al endpoint real

  constructor(private http: HttpClient) {}

  registrarUsuario(dto: RegistroUsuarioDto): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/registrar`, dto);
  }
}
