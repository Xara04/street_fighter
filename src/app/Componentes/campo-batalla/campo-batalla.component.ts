import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campo-batalla',
  imports: [CommonModule],
  templateUrl: './campo-batalla.component.html',
  styleUrl: './campo-batalla.component.css'
})
export class CampoBatallaComponent implements OnInit {
  luchador1: any = null;
  luchador2: any = null;

  ganador: string = ''; //Para mostrar el nombre del ganador
  luchadorGanador: any = null; //Para mostrar la imagen del ganador
  constructor(private route: ActivatedRoute, private http: HttpClient, private cdr: ChangeDetectorRef,private router: Router) { }

  ngOnInit(): void {
    // Obtener los parámetros de los luchadores desde la URL
    this.route.params.subscribe(params => {
      const luchador1Nombre = params['nombre1'];
      const luchador2Nombre = params['nombre2'];

      // Cargar los luchadores desde la API o archivo JSON
      this.http.get<any>('http://localhost:3000/api/characters').subscribe(
        (data) => {
          this.luchador1 = data.characters.find((luchador: { nombre: any; }) => luchador.nombre === luchador1Nombre);
          this.luchador2 = data.characters.find((luchador: { nombre: any; }) => luchador.nombre === luchador2Nombre);
        },
        (error) => {
          console.error('Error al cargar los luchadores:', error);
        }
      );
    });
  }
  // Método para determinar el ganador al pulsar el botón
  determinarGanador(): void {
    // Determinar al ganador (esto depende de la lógica que estés usando para el combate)
    let luchadorGanador = this.luchador1.fuerza > this.luchador2.fuerza ? this.luchador1 : this.luchador2;
    
    // Redirigir a la página del ganador
    this.router.navigate(['/ganador', luchadorGanador.nombre]);
  }
}
