import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Iluchador } from '../../Interfaz/iluchador';

@Component({
  selector: 'app-atributo-luchador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atributo-luchador.component.html',
  styleUrl: './atributo-luchador.component.css'
})
export class AtributoLuchadorComponent {
  @Input() character: any;  
  @Input()
  valorAtributo!: number;
  @Input() nombreAtributo: string = '';
}
