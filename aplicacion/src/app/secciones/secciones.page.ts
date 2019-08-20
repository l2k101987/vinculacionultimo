import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  constructor(public http:HttpClient, private roter:Router) { }
  secciones:any[];
  ngOnInit() {
    this.http.get<any[]>("http://45.238.216.15:81/api/Secciones")
    .subscribe(datos => this.secciones = datos);
  }

}
