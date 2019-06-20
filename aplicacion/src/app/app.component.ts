import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Iniciar Sesion',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Nacionalidades',
      url: '/nacionalidades',
      icon: 'flag'
    },
    {
      title: 'Contaminación del Agua',
      url: '/contaminacion-agua',
      icon: 'water'
    },
    {
      title: 'Contaminación del Aire',
      url: '/contaminacion-aire',
      icon: 'cloud'
    },
    {
      title: 'Contaminación del Suelo',
      url: '/contaminacion-suelo',
      icon: 'nuclear'
    },
    {
      title: 'Familias',
      url: '/familias',
      icon: 'people'
    },
    {
      title: 'Familiogramas',
      url: '/familiogramas',
      icon: 'git-compare'
    },
    {
      title: 'Fichas',
      url: '/fichas',
      icon: 'paper'
    },
    {
      title: 'GPS',
      url: '/gps',
      icon: 'pin'
    },
    {
      title: 'Grupos Priorizados',
      url: '/grupos-priorizados',
      icon: 'people'
    },
    {
      title: 'Miembros de Familia',
      url: '/miembros-familia',
      icon: 'person'
    },
    {
      title: 'Preguntas',
      url: '/preguntas',
      icon: 'help'
    },
    {
      title: 'Rango de Edades',
      url: '/rango-edades',
      icon: 'podium'
    },
    {
      title: 'Respuesta',
      url: '/respuestas',
      icon: 'checkmark'
    },
    {
      title: 'Secciones',
      url: '/secciones',
      icon: 'folder'
    },
    {
      title: 'Subecciones',
      url: '/subsecciones',
      icon: 'menu'
    },
    {
      title: 'Antecedentes Familiares',
      url: '/detalle-respuesta-ant-familiares',
      icon: 'stats'
    },
    {
      title: 'Instituciones del Sistema',
      url: '/instituciones-sistema',
      icon: 'desktop'
    },
    {
      title: 'Respuestas Embarazo',
      url: '/embarazos',
      icon: 'woman'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
