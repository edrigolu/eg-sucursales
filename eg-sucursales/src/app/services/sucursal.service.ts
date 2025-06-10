import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto lo hace un servicio singleton accesible en toda la aplicación
})
export class SucursalService {

  private apiUrl = 'http://localhost:44374/api/sucursal';
  

  constructor(private _http: HttpClient) {}

  // Obtener todas las sucursales
  getSucursales(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiUrl}`);
  }

  // Obtener una sucursal por su ID
  getSucursal(id: number): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva sucursal
  createSucursal(sucursal: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, sucursal);
  }

  // Actualizar una sucursal existente
  updateSucursal(id: number, sucursal: any): Observable<any> {
    return this._http.put<any>(`${this.apiUrl}/${id}`, sucursal);
  }

  // Eliminar una sucursal
  deleteSucursal(id: number): Observable<any> {
    return this._http.delete<any>(`${this.apiUrl}/${id}`);
  }

  
}
