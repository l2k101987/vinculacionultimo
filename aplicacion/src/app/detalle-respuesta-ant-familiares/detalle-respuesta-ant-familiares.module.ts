import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleRespuestaAntFamiliaresPage } from './detalle-respuesta-ant-familiares.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRespuestaAntFamiliaresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleRespuestaAntFamiliaresPage]
})
export class DetalleRespuestaAntFamiliaresPageModule {}
