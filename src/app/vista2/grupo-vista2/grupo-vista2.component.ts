import { Component, OnInit } from '@angular/core';
import {Mensaje} from '../mensaje';


@Component({
  selector: 'app-grupo-vista2',
  templateUrl: './grupo-vista2.component.html',
  styleUrls: ['./grupo-vista2.component.scss']
})
export class GrupoVista2Component implements OnInit {

  listaMensajes: Mensaje[];

  constructor() {
    this.listaMensajes = [{ name: "pepe", email: "pepe@gmai.com", message: "This is a message from pepe" }];
   }

  ngOnInit(): void {
  }

  addNewMensaje(mensaje: Mensaje) {
    this.listaMensajes.push(mensaje);
  }

}
