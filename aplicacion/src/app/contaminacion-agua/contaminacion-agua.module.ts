import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContaminacionAguaPage } from './contaminacion-agua.page';

const routes: Routes = [
  {
    path: '',
    component: ContaminacionAguaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContaminacionAguaPage]
})
export class ContaminacionAguaPageModule {}
