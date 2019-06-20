import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevoGrupoPage } from './nuevo-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoGrupoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevoGrupoPage]
})
export class NuevoGrupoPageModule {}
