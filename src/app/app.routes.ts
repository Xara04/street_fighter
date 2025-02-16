import { Routes } from '@angular/router';
import { AreaSeleccionComponent } from './Componentes/area-seleccion/area-seleccion.component';
import { AreaCombateComponent } from './Componentes/area-combate/area-combate.component';
import { CampoBatallaComponent } from './Componentes/campo-batalla/campo-batalla.component';
import { GanadorComponent } from './Componentes/ganador/ganador.component';

export const routes: Routes = [
    { path: '', component: AreaSeleccionComponent },
    { path: 'app-area-combate/:nombre', component: AreaCombateComponent },
    {path: 'campo-de-batalla/:nombre1/:nombre2',component: CampoBatallaComponent},
    {path: 'ganador/:nombre', component: GanadorComponent}
  ];
