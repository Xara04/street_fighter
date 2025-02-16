import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area-combate',
  imports: [CommonModule],
  templateUrl: './area-combate.component.html',
  styleUrl: './area-combate.component.css'
})
export class AreaCombateComponent implements OnInit {
  luchadorSeleccionado: any = null; // Luchador seleccionado
  luchadorAleatorio: any = null;

  characters: any[] = [];  // Array de luchadores

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}
 
  ngOnInit(): void {
    
    // Cargar los luchadores desde el archivo JSON o API
    this.http.get<any>('http://localhost:3000/api/characters').subscribe(
      (data) => {
        this.characters = data.characters;
        const luchadorId = this.route.snapshot.paramMap.get('nombre');
        console.log('Luchador recibido en AreaCombateComponent:', luchadorId); 
        if (luchadorId) {
          this.luchadorSeleccionado = this.characters.find(luchador => luchador.nombre === luchadorId);
          console.log('Este es el luchador :', luchadorId);
        }
       
        this.seleccionarLuchadorAleatorio();
      },
      (error) => {
        console.error('Error al cargar los luchadores:', error);
      }
    );
  }

 // Método para seleccionar un luchador aleatorio
 seleccionarLuchadorAleatorio(): void {
  const luchadoresDisponibles = this.characters.filter(luchador => luchador.nombre !== this.luchadorSeleccionado.nombre);
  const indiceAleatorio = Math.floor(Math.random() * luchadoresDisponibles.length);
  this.luchadorAleatorio = luchadoresDisponibles[indiceAleatorio];
}

 // Método para regresar al área de selección
 regresarAlAreaSeleccion(): void {
  this.router.navigate(['/']);
}

  // Método para ir al campo de batalla y pasar los dos luchadores como parámetros
  irAlCampoDeBatalla(): void {
    console.log('Iniciando el combate...');
    // Navegar a la nueva ruta pasando los luchadores seleccionados como parámetros en la URL
    this.router.navigate(['/campo-de-batalla', this.luchadorSeleccionado.nombre, this.luchadorAleatorio.nombre]);
  }
}
