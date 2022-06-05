import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() newClienteEvent = new EventEmitter<Object>();

  nombre = "";
  cif: string = "";
  direccion: string = "";
  grupo: string = "";
  alert: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Sumited");

  }


  /**
   * Llamado por el botón "Guardar" del form.component
   *
   * @returns void
   */
  addNewCliente(): void {

    // Si algun campo está vacio no enviar
    if (!this.allSelected()) {
      this.alert = true;
      return;
    }
    this.alert = false;
    // Enviar nuevo objeto a través del evento
    this.newClienteEvent.emit({
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    });

    // Resetear las variables
    this.nombre = "";
    this.cif = "";
    this.direccion = "";
    this.grupo = "";

  }

  /**
   *
   * @returns Comprobar que todos los campos se ha llenado
   */
  allSelected() {
    if (this.nombre != "" || this.cif != "" || this.direccion != "" || this.grupo != "") {
      return true;
    }
    return false;
  }

}



