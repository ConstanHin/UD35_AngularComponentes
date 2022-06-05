import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-vista1',
  templateUrl: './grupo-vista1.component.html',
  styleUrls: ['./grupo-vista1.component.scss']
})
export class GrupoVista1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaClientes: {}[] = [];

  // Llamado por el evento "newClienteEvent"
  addCliente(newCliente: {}) {
    this.listaClientes.push(newCliente);
  }
}
