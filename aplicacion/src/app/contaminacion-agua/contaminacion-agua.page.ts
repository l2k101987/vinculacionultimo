import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contaminacion-agua',
  templateUrl: './contaminacion-agua.page.html',
  styleUrls: ['./contaminacion-agua.page.scss'],
})
export class ContaminacionAguaPage implements OnInit {

  constructor(private http:HttpClient) { }
  aguas:any[];
  ngOnInit() {
    this.http.get<any[]>("http://45.238.216.15:81/api/ContaminacionDelAguas")
    .subscribe(datos => this.aguas = datos);
  }

}
