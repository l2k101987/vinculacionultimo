import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route ,Router, ActivatedRoute } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nuevasub',
  templateUrl: './nuevasub.page.html',
  styleUrls: ['./nuevasub.page.scss'],
})
export class NuevasubPage implements OnInit {

  constructor(private http:HttpClient, public ruta:Router, public parametros:ActivatedRoute, private roter:Router) { }
  txtDetalle:any ='';
  subSeccionId:string;
  modoEdision:Boolean=false;
  secciones: any[];
  seccionId: any = "";
  ngOnInit() {

    this.http.get<any[]>("http://45.238.216.15:81/api/Secciones")
    .subscribe(datos => this.secciones = datos);

    this.parametros.params.subscribe(
      datos=>{
        if(datos["id"]==undefined){
          return;
        }
        this.modoEdision=true;
        this.subSeccionId=datos["id"];
        this.http.get<any>("http://45.238.216.15:81/api/SubSecciones/" + datos["id"])
        });
  }

  async grabar(){

    if(this.modoEdision){
      let subseccion = {"subSeccionId":this.subSeccionId, "nSubSeccion":this.txtDetalle,"seccionId": this.seccionId};
      this.http.put<any>("http://45.238.216.15:81/api/SubSecciones/" + this.subSeccionId,subseccion)
      .subscribe(datos => { console.log(datos);this.ruta.navigateByUrl("/subsecciones") });
    }else{
      let subseccion = {"nSubSeccion":this.txtDetalle,"seccionId": this.seccionId};
      this.http.post<any>("http://45.238.216.15:81/api/SubSecciones",subseccion)
      .subscribe(datos => {this.roter.navigateByUrl("/subsecciones");
    });
    } 
  }

}
