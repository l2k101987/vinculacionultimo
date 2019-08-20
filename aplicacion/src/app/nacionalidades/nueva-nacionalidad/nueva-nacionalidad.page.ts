import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route ,Router, ActivatedRoute } from '@angular/router';
import { ToastController} from '@ionic/angular';


@Component({
  selector: 'app-nueva-nacionalidad',
  templateUrl: './nueva-nacionalidad.page.html',
  styleUrls: ['./nueva-nacionalidad.page.scss'],
})
export class NuevaNacionalidadPage implements OnInit {

  constructor(private http:HttpClient, public ruta:Router, public parametros:ActivatedRoute, private roter:Router) { }
  txtDetalle:any ='';
  nacionalidadId:string;
  modoEdision:Boolean=false;
  ngOnInit() {
    this.parametros.params.subscribe(
      datos=>{
        if(datos["id"]==undefined){
          return;
        }
        this.modoEdision=true;
        this.nacionalidadId=datos["id"];
        this.http.get<any>("http://45.238.216.15:81/api/Nacionalidades/" + datos["id"])
        
        });
  }

  async grabar(){

    if(this.modoEdision){
      let nacion = {"nacionalidadId":this.nacionalidadId, "detalle":this.txtDetalle};
      this.http.put<any>("http://45.238.216.15:81/api/Nacionalidades/" + this.nacionalidadId,nacion)
      .subscribe(datos => { console.log(datos);this.ruta.navigateByUrl("/nacionalidades") });
    }else{
      let nacion = {"detalle":this.txtDetalle};
      this.http.post<any>("http://45.238.216.15:81/api/Nacionalidades",nacion)
      .subscribe(datos => {this.roter.navigateByUrl("/nacionalidades");
    });
    } 
  }
}
