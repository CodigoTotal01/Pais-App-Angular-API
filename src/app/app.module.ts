import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //! Los Modulos a emplear siempre que sean txternos se importan 
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisModule, //de manera global porque se usara en muchos lados para relizar la peticion
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
