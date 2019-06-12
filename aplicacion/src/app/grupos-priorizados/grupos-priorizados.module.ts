import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GruposPriorizadosPage } from './grupos-priorizados.page';

const routes: Routes = [
  {
    path: '',
    component: GruposPriorizadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GruposPriorizadosPage]
})
export class GruposPriorizadosPageModule {}
