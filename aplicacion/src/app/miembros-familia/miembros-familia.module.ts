import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiembrosFamiliaPage } from './miembros-familia.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosFamiliaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiembrosFamiliaPage]
})
export class MiembrosFamiliaPageModule {}
