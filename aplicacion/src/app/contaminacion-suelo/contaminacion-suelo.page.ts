import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contaminacion-suelo',
  templateUrl: './contaminacion-suelo.page.html',
  styleUrls: ['./contaminacion-suelo.page.scss'],
})
export class ContaminacionSueloPage implements OnInit {

  constructor(public http:HttpClient) { }

  suelos:any[];
  ngOnInit() {
    this.http.get<any[]>("http://45.238.216.15:81/api/ContaminacionDelSueloes")
    .subscribe(datos => this.suelos = datos);
  }

}
