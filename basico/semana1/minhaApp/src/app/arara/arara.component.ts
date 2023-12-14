import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'

})
export class AraraComponent {
  name: string = "Arara Azul";
  tipo: string = "Tamanduá";
  contador = 0;
  color: string = 'red';

  public onClick(): void {
    console.log("clicou em mim")
    this.contador += 1;
  }

  public getToString(): string {
    return this.name + " - A melhor!"
  }

  public changeColor(): void {
    this.color = this.color == 'red' ? 'blue' : 'red';
  }
}


