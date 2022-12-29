import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',

})
export class PaisTablaComponent  {
  @Input() paises : Country[] =[]; //! Para los imput simplemente pasalo empleadno el operador []
  
}
