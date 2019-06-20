import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nuevo-suelo',
  templateUrl: './nuevo-suelo.page.html',
  styleUrls: ['./nuevo-suelo.page.scss'],
})
export class NuevoSueloPage implements OnInit {

  constructor(private http:HttpClient, private ruta:Router, public parametros:ActivatedRoute) { }
  txtDetalle:any ='';
  sueloId:string;
  modoEdision:Boolean=false;
  ngOnInit() {
    this.parametros.params.subscribe(
      datos=>{
        if(datos["id"]==undefined){
          return;
        }
        this.modoEdision=true;
        this.sueloId=datos["id"];
        this.http.get<any>("http://45.238.216.15:81/api/ContaminacionDelSueloes/" + datos["id"])
        .subscribe(datossuelo=>{ console.log(datossuelo); this.txtDetalle=datossuelo.detalle} );
      });
  }

  async grabar(){
    if(this.modoEdision){
      let suelo = {"contaminacionDelSueloId":this.sueloId, "detalle":this.txtDetalle};
      this.http.put<any>("http://45.238.216.15:81/api/ContaminacionDelSueloes/" + this.sueloId,suelo)
      .subscribe(datos => { console.log(datos);this.ruta.navigateByUrl("/contaminacion-suelo") });
    }else{
      let suelo = {"detalle":this.txtDetalle};
      this.http.post<any>("http://45.238.216.15:81/api/ContaminacionDelSueloes",suelo)
      .subscribe(datos => {this.ruta.navigateByUrl("/contaminacion-suelo");});
    } 
  }
}
