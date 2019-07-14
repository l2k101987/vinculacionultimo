import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {
  lat:number
  long:number
  total: string

  constructor(public navCtrl: NavController, public geolocation: Geolocation) { 
    this.getGeolocation()
  }
  getGeolocation(){
    this. geolocation.getCurrentPosition().then((geoposition: Geoposition) =>{
      this.lat = geoposition.coords.latitude;
      this.long = geoposition.coords.longitude;
  })
  }
  

  ngOnInit() {
  }

}
