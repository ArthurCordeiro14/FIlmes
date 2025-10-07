import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Filme } from './filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  

  private http = inject(HttpClient)



  obterFilme(titulo:string):Observable<Filme>{
    return this.http.get<Filme>(`https://www.omdbapi.com/?t=${titulo}&apikey=c33cae24`)
  }

}
