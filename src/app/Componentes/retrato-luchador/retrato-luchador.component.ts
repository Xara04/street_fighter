import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retrato-luchador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retrato-luchador.component.html',
  styleUrl: './retrato-luchador.component.css'
})
export class RetratoLuchadorComponent{
  @Input() character: any;
  @Input() isSelected: boolean = false;  // Determina si el luchador está seleccionado
  @Input() colorAsociado: string = ''; // Recibe el color del borde desde el JSON

  @Output() selected = new EventEmitter<any>(); // Emite el luchador seleccionado

  constructor() {}

   // Función que emite el luchador seleccionado
   selectCharacter() {
    this.selected.emit(this.character);
  }

}


