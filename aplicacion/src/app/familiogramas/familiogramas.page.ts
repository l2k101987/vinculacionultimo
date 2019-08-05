import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-familiogramas',
  templateUrl: './familiogramas.page.html',
  styleUrls: ['./familiogramas.page.scss'],
})
export class FamiliogramasPage {
  foto: any;
  constructor(private camera: Camera) { }
  hacerFoto () {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

}
