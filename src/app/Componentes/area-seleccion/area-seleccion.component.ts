import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iluchador } from '../../Interfaz/iluchador';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RetratoLuchadorComponent } from "../retrato-luchador/retrato-luchador.component";
import { AtributoLuchadorComponent } from '../atributo-luchador/atributo-luchador.component';



@Component({
  selector: 'app-area-seleccion',
  standalone: true,
  imports: [HttpClientModule, NgFor, CommonModule, RetratoLuchadorComponent, AtributoLuchadorComponent],
  templateUrl: './area-seleccion.component.html',
  styleUrl: './area-seleccion.component.css'
})
export class AreaSeleccionComponent implements OnInit {
 
  @Output() characterSelected = new EventEmitter<Iluchador>();
  characters: any[] = [];  // Array de luchadores
  selectedCharacter: any = null; // Luchador seleccionado

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Asegúrate de que la URL de la API sea correcta
    this.http.get<any>('http://localhost:3000/api/characters').subscribe(
      (data) => {
        console.log('Datos recibidos:', data);  // Verificamos los datos en consola

        // Accedemos a la propiedad 'characters' que contiene el array de personajes
        if (data && Array.isArray(data.characters)) {
          this.characters = data.characters;  // Asignamos el array de characters
        } else {
          console.error('Los datos no tienen la propiedad "characters" o no es un array');
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
  
    // Selecciona un luchador
    selectCharacter(character: any) {
      if (this.selectedCharacter === character) {
        // Si ya está seleccionado, desmarcarlo
        this.selectedCharacter = null;
      } else {
        this.selectedCharacter = character;  // Guardar el luchador seleccionado
      }
    }

}
