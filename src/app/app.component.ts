import { Component} from '@angular/core';
import { AreaSeleccionComponent } from './Componentes/area-seleccion/area-seleccion.component';
import { Iluchador } from './Interfaz/iluchador';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
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
