import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RangoEdadesPage } from './rango-edades.page';

const routes: Routes = [
  {
    path: '',
    component: RangoEdadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RangoEdadesPage]
})
export class RangoEdadesPageModule {}
