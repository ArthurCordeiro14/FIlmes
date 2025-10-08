import { Component } from '@angular/core';
import { Filme } from '../model/filme';
import { FilmeService } from '../model/filme-service';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
filmes: Filme[] = []
  constructor(fs: FilmeService, private filmeService: FilmeService) {}

  
  buscar(): void {
  const titulo = 'batman'
    this.filmeService.BuscaVarios(titulo).subscribe(res => {
       this.filmes = res.Search;
    })
  }
}
