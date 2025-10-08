import { Component } from '@angular/core';
import { Filme } from '../model/filme';
import { FilmeService } from '../model/filme-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule,FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  titulo = ''
  tipo='t'
  resultado:any
  
  constructor(fs: FilmeService, private filmeService: FilmeService) {}

  
   buscar() {
    if (!this.titulo.trim()) return
    
    if(this.tipo=='t'){
    this.filmeService.BuscaUm(this.titulo).subscribe(res => {
      this.resultado = res
    })
  }else{
       this.filmeService.BuscaVarios(this.titulo).subscribe(res => {
        this.resultado = res;
    })
    }
  }
}
