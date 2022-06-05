import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoVista1Component } from './grupo-vista1/grupo-vista1.component';
import { FormsModule } from "@angular/forms";

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    GrupoVista1Component,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GrupoVista1Component
  ],
  bootstrap: [GrupoVista1Component]
})
export class Vista1Module { }
