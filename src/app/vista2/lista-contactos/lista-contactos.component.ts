import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  @Input() listaMensajes: Mensaje[];

  constructor() {
    this.listaMensajes = [{ name: "pepe2", email: "pepe@gmai.com", message: "This is a message from pepe" }];
  }


  ngOnInit(): void {
  }


}
