import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  nombre = "pepe";
  cif: string = "";
  direccion: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Sumited");

  }

}
