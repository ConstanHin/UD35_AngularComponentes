import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'UD35_AngularComponentes';
  listaClientes : {}[] = [];

  addCliente(newCliente: {}) {
    this.listaClientes.push(newCliente);
  }
}
