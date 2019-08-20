import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nacionalidades',
  templateUrl: './nacionalidades.page.html',
  styleUrls: ['./nacionalidades.page.scss'],
})
export class NacionalidadesPage implements OnInit {

  constructor(public http:HttpClient, private roter:Router) { }
  nacionalidades:any[];
  ngOnInit() {
    this.http.get<any[]>("http://45.238.216.15:81/api/Nacionalidades")
    .subscribe(datos => this.nacionalidades = datos);
  }
  
}
