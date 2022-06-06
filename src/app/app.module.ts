import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Vista1Module } from './vista1/vista1.module';
import { Vista2Module } from './vista2/vista2.module';
import { GrupoVista1Component } from './vista1/grupo-vista1/grupo-vista1.component';
import { GrupoVista2Component } from './vista2/grupo-vista2/grupo-vista2.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {path:"ej1", component:GrupoVista1Component},
      {path:"ej2", component:GrupoVista2Component}
    ]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Vista1Module,
    Vista2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
