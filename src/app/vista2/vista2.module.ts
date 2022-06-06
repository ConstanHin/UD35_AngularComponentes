import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoVista2Component } from './grupo-vista2/grupo-vista2.component';
import { Form2Component } from './form2/form2.component';
import { FormsModule } from '@angular/forms';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { MensajeComponent } from './mensaje/mensaje.component';



@NgModule({
  declarations: [
    GrupoVista2Component,
    Form2Component,
    ListaContactosComponent,
    MensajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GrupoVista2Component
  ]
})
export class Vista2Module { }
