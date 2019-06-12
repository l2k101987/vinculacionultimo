import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NacionalidadesPage } from './nacionalidades.page';

const routes: Routes = [
  {
    path: '',
    component: NacionalidadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NacionalidadesPage]
})
export class NacionalidadesPageModule {}
