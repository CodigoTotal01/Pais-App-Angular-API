import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})

//empleando el ciclo de vida 
export class PaisInputComponent implements OnInit{


  ngOnInit(): void {//cuando el componente es creado solo se dispara una sola vez 
     this.debounce
     //tranformar la salida -> 
     .pipe(debounceTime
      (300) ) //esperar antes de emitir el siguiente valor 
     .subscribe(valor=> {
      this.onDebounce.emit(valor)
     });
  }
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // cuando se deja de escribir se ejecuta este evento
    @Input() placeHolder : string  = ""
  //subject -> como un obsevable 
  debounce: Subject<string> = new Subject();

  termino : string = "";
  buscar(){
    console.log(this.placeHolder);
      this.onEnter.emit(this.termino) //-> ahaora en el htl padre ve y indic a que evento se enviara 
     
  }

  teclaPrecionada(){
    //enviar el siguiente valor 
    this.debounce.next(this.termino) // se irea a ver en el dbouncer del ngOnInit -> 
      
  }
}
