import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;
  @Input() placeholder: string = "";
  paises: Country[] = []
  paisesSugeridos: Country[] = []

  mostrarSugerencias: boolean= false;
  constructor(private paisService: PaisService) { }

  buscar( termino : string) {
    this.hayError= false;
    this.termino = termino; // dle indicamos que el termino recibido sera el que manejae laclase para emlear el servisio 
    this.paisService.buscarPais(this.termino)
      //next
      .subscribe((resp) => {
        //!Tomar la informacion y meterlo en nuestra tabla de paises 
        console.log(resp);
        this.paises = resp;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      }); //! para que u n objeto se dispare minimo un subcribe 
  }
//par que dedsaparesca el mensaje de error 
  sugerencias(termino: string){
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(
      (paises)=>
        this.paisesSugeridos = paises.splice(0,3),
        (err)=> this.paisesSugeridos = []
    ) 
  }

  buscarSugerido(termino: string){
    this.mostrarSugerencias = false;
    this.buscar(termino);
  }
} 

