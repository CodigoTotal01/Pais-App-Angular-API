import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  constructor(private paisService:PaisService){}
regiones: string[]= ['EU', 'EFTA', 'EEU', 'ASEAN', 'PA'];
paises: Country[] = [];
regionActiva:string= '';
activarRegion(region :string){
  if(region === this.regionActiva){return} //! no debemos volver a carfar si es la misma 
  
  this.regionActiva = region;
  this.paisService.buscarPorRegion(region).subscribe(pais => {
    this.paises = pais;
  });

}

getClaseCSS(region : string): string{

  return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
}



}
