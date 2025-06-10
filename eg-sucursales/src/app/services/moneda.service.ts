import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  private monedaUrl = 'http://localhost:44374/api/moneda/all';

  constructor(private _http: HttpClient) { }


  // Obtener todas las monedas
  getMonedas(): Observable<any[]> {
    return this._http.get<any[]>(`${this.monedaUrl}`);
  }
}
