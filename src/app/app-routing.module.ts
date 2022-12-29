import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";



//! Usa las rutas -> no se exporta -> solo importa el RouterModule -> hace la conficguracion de las rutas -> forRoot -> rutas principlaes
const routes : Routes =[

    //esttoy en la ruta ""
    //cuando alguien entra ahi es lo primero a mostrar 
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: "full" // cuando estemos en el url que caiga en en este lugar , si no esta este full, todos lso demas cuadran con que este vacio 

    },
    {
        
        path:'region',
        component: PorRegionComponent, //Poblado en el app moduele y en el pais module 
    },
    {
        path:"capital",
        component: PorCapitalComponent,
    },
    {

        //! Lo recivbiremos en los params 
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    //si la persona no entra a ninguna de las rutas que nosotros tenemos 
    {//! para mostrar un eeror personalizado
        path: '**',
        redirectTo: '',
    }


]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}