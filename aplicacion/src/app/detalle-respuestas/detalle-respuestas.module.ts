import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleRespuestasPage } from './detalle-respuestas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRespuestasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleRespuestasPage]
})
export class DetalleRespuestasPageModule {}
