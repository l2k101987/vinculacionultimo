import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-grupos-priorizados',
  templateUrl: './grupos-priorizados.page.html',
  styleUrls: ['./grupos-priorizados.page.scss'],
})
export class GruposPriorizadosPage implements OnInit {

  constructor(public http:HttpClient) { }

  grupos:any[];
  ngOnInit() {
    this.http.get<any[]>("http://45.238.216.15:81/api/GrupoPriorizados")
    .subscribe(datos => this.grupos = datos);
  }

}
