import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ganador',
  imports: [CommonModule],
  templateUrl: './ganador.component.html',
  styleUrl: './ganador.component.css'
})
export class GanadorComponent implements OnInit {
  luchadorGanador: any;

  characters: any[] = []; // Aquí almacenamos los luchadores
 constructor(private route: ActivatedRoute,  private http: HttpClient) { }
 ngOnInit(): void {
  // Primero cargamos los luchadores desde el archivo JSON o la API
  this.http.get<any>('http://localhost:3000/api/characters').subscribe(
    (data) => {
      this.characters = data.characters; // Asumiendo que la respuesta tiene un objeto 'characters'
      
      // Obtener el nombre del luchador ganador desde la URL
      const luchadorId = this.route.snapshot.paramMap.get('nombre');
      
      if (luchadorId) {
        // Buscar el luchador que coincide con el nombre de la URL
        this.luchadorGanador = this.characters.find(luchador => luchador.nombre === luchadorId);
        
        if (this.luchadorGanador) {
          console.log('Ganador:', this.luchadorGanador);  // Muestra el luchador ganador en la consola
        } else {
          console.error('Luchador no encontrado');
        }
      } else {
        console.error('No se ha recibido el nombre del luchador');
      }
    },
    (error) => {
      console.error('Error al cargar los luchadores:', error);
    }
  );
}


}
