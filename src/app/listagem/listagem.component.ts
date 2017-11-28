import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title: String = 'Caelum Pic';
  fotos: Object[] = [];

  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
        .map(resposta => resposta.json())
        .subscribe(
          jsonFotos => {
              this.fotos = jsonFotos;
              console.log('Foi', this.fotos);
            },
          error => console.log(error),
          () => console.log('Finalizar uma animaão')
        );
  }
}
