import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnInit {

  @Input() objetoMensaje: Mensaje = new Mensaje();

  constructor() { }

  ngOnInit(): void {
  }

}
