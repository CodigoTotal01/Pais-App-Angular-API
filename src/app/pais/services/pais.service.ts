import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//inyectable en cualquier componente -> 
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  // LLamado de end Points 
get httpParams() {
  return new HttpParams().set('fields', 'name;capital;alpha2Code;flags;population');

}
  private apiUrl: string=  "https://restcountries.com/v2/";
  constructor(private http: HttpClient) { }

  //modulo Http -> peticion get retorna un observbable 
  //! Los get puede retornar cualquier cosa 
  buscarPais(termino: string ): Observable <Country[]> { //! no transpforma el objeto -> solo le dice como luce 
    const url =  `${this.apiUrl}/name/${termino}`;
    //nada que se halla ocntenido
    return this.http.get<Country[]>(url);
    //.pipe(
      //catchError(err => of(["No se hallo el pais"])) //! Atrapa el error y retorna un arreglo basio 
    //);
  }


  buscarCapital(termino: string): Observable<Country[]>{
    //logicamente le estamos pasando el nombre de una capital 
    const url = `${this.apiUrl}/capital/${termino} `;
    return this.http.get<Country[]>(url);
  }


    //REcivbbimos un solo pais 
  getPaisPorAlpha(id: string): Observable<Country>{
    //logicamente le estamos pasando el nombre de una capital 
    const url = `${this.apiUrl}/alpha/${id} `;
    return this.http.get<Country>(url);
  }


  buscarPorRegion(termino: string): Observable<Country[]>{
    //logicamente le estamos pasando el nombre de una capital
    const url = `${this.apiUrl}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url/*, {params: this.httpParams}*/).pipe(tap(console.log));
  }

}
