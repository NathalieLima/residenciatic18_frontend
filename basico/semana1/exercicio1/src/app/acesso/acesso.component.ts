import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  visibilidade: string = "none";
  nome: string = "tzt";
  permissao: string = "";
  usuarios: string[] = ['root', 'admin', 'visitante']
  desabilitado: string = "disabled";

  //public mudarVisibilidade()

  public onLogando()
  {
    if ( this.usuarios.includes(this.permissao) ) {
      this.desabilitado = "";
    }
  }

  public aparecerTexto() {
    this.visibilidade = "initial";
    this.nome = this.permissao;
  }
}
