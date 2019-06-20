import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nuevo-grupo',
  templateUrl: './nuevo-grupo.page.html',
  styleUrls: ['./nuevo-grupo.page.scss'],
})
export class NuevoGrupoPage implements OnInit {

  constructor(private http:HttpClient, private ruta:Router, public parametros:ActivatedRoute) { }
  txtDetalle:any ='';
  grupoId:string;
  modoEdision:Boolean=false;
  ngOnInit() {
    this.parametros.params.subscribe(
      datos=>{
        if(datos["id"]==undefined){
          return;
        }
        this.modoEdision=true;
        this.grupoId=datos["id"];
        this.http.get<any>("http://45.238.216.15:81/api/GrupoPriorizados/" + datos["id"])
        .subscribe(datosgrupo=>{ console.log(datosgrupo); this.txtDetalle=datosgrupo.detalle} );
      });
  }

 async grabar(){
  if(this.modoEdision){
    let grupo = {"grupoPriorizadoId":this.grupoId, "detalle":this.txtDetalle};
    this.http.put<any>("http://45.238.216.15:81/api/GrupoPriorizados/" + this.grupoId,grupo)
    .subscribe(datos => { console.log(datos);this.ruta.navigateByUrl("/grupos-priorizados") });
  }else{
    let grupo = {"detalle":this.txtDetalle};
    this.http.post<any>("http://45.238.216.15:81/api/GrupoPriorizados",grupo)
    .subscribe(datos => {this.ruta.navigateByUrl("/grupos-priorizados");});
  } 
  }
}
