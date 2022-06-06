import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  @Output() newMensajeEvent = new EventEmitter<Mensaje>();

  favoriteColorControl = new FormControl('');

  nombre: string = "";
  email: string = "";
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submited");

    const mensaje = new Mensaje();
    mensaje.name = this.nombre;
    mensaje.email = this.email;
    mensaje.message = this.message;

    console.log(mensaje);
    this.newMensajeEvent.emit(mensaje);

  }



}
