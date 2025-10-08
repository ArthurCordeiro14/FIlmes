import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Filme } from './filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  
  private http = inject(HttpClient)
  private APIURL = 'https://www.omdbapi.com/?apikey=c33cae24&type=movie'

  constructor() { }


  BuscaUm(titulo:string):Observable<Filme>{
    return this.http.get<Filme>(`${this.APIURL}&t=${titulo}`)
  }

  BuscaVarios(titulo:string):Observable<any>{
    return this.http.get<Filme[]>(`${this.APIURL}&s=${titulo}`)
  }

}
