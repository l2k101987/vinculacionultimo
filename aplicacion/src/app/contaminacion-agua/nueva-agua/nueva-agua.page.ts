import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nueva-agua',
  templateUrl: './nueva-agua.page.html',
  styleUrls: ['./nueva-agua.page.scss'],
})
export class NuevaAguaPage implements OnInit {

  constructor(private http:HttpClient, private ruta:Router, public parametros:ActivatedRoute) { }
  txtDetalle:any ='';
  aguaId:string;
  modoEdision:Boolean=false;
  ngOnInit() {
    this.parametros.params.subscribe(
      datos=>{
        if(datos["id"]==undefined){
          return;
        }
        this.modoEdision=true;
        this.aguaId=datos["id"];
        this.http.get<any>("http://45.238.216.15:81/api/ContaminacionDelAguas/" + datos["id"])
        .subscribe(datosaguas=>{ console.log(datosaguas); this.txtDetalle=datosaguas.detalle} );
      });
  }

  async grabar(){ 

    if(this.modoEdision){
      let agua = {"contaminacionDelAguaId":this.aguaId, "detalle":this.txtDetalle};
      this.http.put<any>("http://45.238.216.15:81/api/ContaminacionDelAguas/" + this.aguaId,agua)
      .subscribe(datos => { console.log(datos);this.ruta.navigateByUrl("/contaminacion-agua") });
    }else{
      let agua = {"detalle":this.txtDetalle};
    this.http.post<any>("http://45.238.216.15:81/api/ContaminacionDelAguas",agua)
    .subscribe(datos => {this.ruta.navigateByUrl("/contaminacion-agua");});
    }     
  }
}
