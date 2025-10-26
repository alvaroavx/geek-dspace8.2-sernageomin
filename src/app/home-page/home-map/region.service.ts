//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  // private jsonUrl = 'https://repositorio.sernageomin.cl/estadisticas/obtenerdatos/totales-regiones.json'; 
  // constructor(private http: HttpClient) {}
  // getRegionItems(): Observable<any> {
  //  return this.http.get(this.jsonUrl);
  // }
     constructor() {}

  getRegionItems(): Observable<any> {
    // return this.http.get(this.jsonUrl);
    return of([]); // devuelve vacío para no romper HomeMapComponent
  }

}

