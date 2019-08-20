import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route ,Router, ActivatedRoute } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nuevaseccion',
  templateUrl: './nuevaseccion.page.html',
  styleUrls: ['./nuevaseccion.page.scss'],
})
export class NuevaseccionPage implements OnInit {

  constructor(private http:HttpClient, public ruta:Router, public parametros:ActivatedRoute, private roter:Router) { }
  txtDetalle:any ='';
  seccionId:string;
  modoEdision:Boolean=false;
  ngOnInit() {
    this.parametros.params.subscribe(
      datos=>{
        if(datos["id"]==undefined){
          return;
        }
        this.modoEdision=true;
        this.seccionId=datos["id"];
        this.http.get<any>("http://45.238.216.15:81/api/Secciones/" + datos["id"])
        });
  }

  async grabar(){

    if(this.modoEdision){
      let seccion = {"seccionId":this.seccionId, "nSeccion":this.txtDetalle};
      this.http.put<any>("http://45.238.216.15:81/api/Secciones/" + this.seccionId,seccion)
      .subscribe(datos => { console.log(datos);this.ruta.navigateByUrl("/secciones") });
    }else{
      let seccion = {"nSeccion":this.txtDetalle};
      this.http.post<any>("http://45.238.216.15:81/api/Secciones",seccion)
      .subscribe(datos => {this.roter.navigateByUrl("/secciones");
    });
    } 
  }

}
