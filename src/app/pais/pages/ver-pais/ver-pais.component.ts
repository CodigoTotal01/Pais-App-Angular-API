import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; //! permite recivir un observable y lo retornamos coomo un oservabvle 
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
//recuerda que recivimos por un id desde nuestro app-routing 
export class VerPaisComponent implements OnInit {
  //subcribirnos antes cualquier cambio del url 
  constructor(private activateRoute:ActivatedRoute, private paisService: PaisService) { }


  pais!: Country;
  ngOnInit(): void {

      //? Tab tira un objeto separado - > solo que sejecute de una 
      this.activateRoute.params
      .pipe(//especificar los cualquier operador de rxjs 
      switchMap(({id})=> //recibimos resultado -> forma corta 
       this.paisService.getPaisPorAlpha(id)), tap(console.log)).subscribe(pais => {
        this.pais = pais;
       })//retorna este observable 
  


    //! 
  /*  this.activateRoute.params
    .subscribe(({id}) => {  
      this.paisService.getPaisPorAlpha(id).
      subscribe(
        pais => console.log(pais)
        );
    });*/

    //! forma mas sencilla 


  }


  

}
