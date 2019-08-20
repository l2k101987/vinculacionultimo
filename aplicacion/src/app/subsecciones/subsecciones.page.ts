import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-subsecciones',
  templateUrl: './subsecciones.page.html',
  styleUrls: ['./subsecciones.page.scss'],
})
export class SubseccionesPage implements OnInit {

  constructor(public http:HttpClient, private roter:Router) { }
  subsecciones:any[];
  ngOnInit() {
    this.roter.navigateByUrl("subsecciones");
    this.cargaTabla();
  }

  cargaTabla() {
    this.http.get<any[]>("http://45.238.216.15:81/api/SubSecciones")
      .subscribe(respuesta => { this.subsecciones = respuesta; console.log(respuesta) });
  }


  eliminar(subSeccionId: number) {
    swal.fire({
      title: 'Eliminar',
      text: "Esta seguro que desea eliminar al dato?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.http.delete<any>("http://45.238.216.15:81/api/SubSecciones/" + subSeccionId)
          .subscribe(respuesta => {
            swal.fire("Datos", "Se elimino con exito el datos", "success");
            this.cargaTabla();
          });
      } else {
        swal.fire("Datos", "El usuario cancelo la operacion", 'info');
      }
    });
  }






}
