import { Component} from '@angular/core';
import { AreaSeleccionComponent } from './Componentes/area-seleccion/area-seleccion.component';
import { Iluchador } from './Interfaz/iluchador';
import { RetratoLuchadorComponent } from "./Componentes/retrato-luchador/retrato-luchador.component";
import { AtributoLuchadorComponent } from "./Componentes/atributo-luchador/atributo-luchador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AreaSeleccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'SUPER STREET FIGHTER';
  selectedCharacter: Iluchador | null = null;

  onCharacterSelected(character: Iluchador): void {
    this.selectedCharacter = character;
  }

 
}
