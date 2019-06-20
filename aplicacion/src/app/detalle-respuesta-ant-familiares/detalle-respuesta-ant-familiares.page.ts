import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detalle-respuesta-ant-familiares',
  templateUrl: './detalle-respuesta-ant-familiares.page.html',
  styleUrls: ['./detalle-respuesta-ant-familiares.page.scss'],
})
export class DetalleRespuestaAntFamiliaresPage implements OnInit {

  constructor(public http:HttpClient) { }

  detrespantfam:any[];
  ngOnInit() {
    this.http.get<any[]>("http://45.238.216.15:81/api/DetalleRespAtnFams")
    .subscribe(datos => this.detrespantfam = datos);
  }

}
