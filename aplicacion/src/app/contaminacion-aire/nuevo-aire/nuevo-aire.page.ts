import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nuevo-aire',
  templateUrl: './nuevo-aire.page.html',
  styleUrls: ['./nuevo-aire.page.scss'],
})
export class NuevoAirePage implements OnInit {

  constructor(private http:HttpClient, private ruta:Router, public parametros:ActivatedRoute) { }
  txtDetalle:any ='';
  aireId:string;
  modoEdision:Boolean=false;
  ngOnInit() {
    this.parametros.params.subscribe(
      datos=>{
        if(datos["id"]==undefined){
          return;
        }
        this.modoEdision=true;
        this.aireId=datos["id"];
        this.http.get<any>("http://45.238.216.15:81/api/ContaminacionDelAires/" + datos["id"])
        .subscribe(datosaire=>{ console.log(datosaire); this.txtDetalle=datosaire.detalle} );
      });
  }

  async grabar(){

    if(this.modoEdision){
      let aire = {"contaminacionDelAireId":this.aireId, "detalle":this.txtDetalle};
      this.http.put<any>("http://45.238.216.15:81/api/ContaminacionDelAires/" + this.aireId,aire)
      .subscribe(datos => { console.log(datos);this.ruta.navigateByUrl("/contaminacion-aire") });
    }else{
      let aire = {"detalle":this.txtDetalle};
    this.http.post<any>("http://45.238.216.15:81/api/ContaminacionDelAires",aire)
    .subscribe(datos => {this.ruta.navigateByUrl("/contaminacion-aire");});
    }  
  }

}
