import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contaminacion-aire',
  templateUrl: './contaminacion-aire.page.html',
  styleUrls: ['./contaminacion-aire.page.scss'],
})
export class ContaminacionAirePage implements OnInit {

  constructor(public http:HttpClient) { }

  aires:any[];
  ngOnInit() {
    this.http.get<any[]>("http://45.238.216.15:81/api/ContaminacionDelAires")
    .subscribe(datos => this.aires = datos);
  }

}
