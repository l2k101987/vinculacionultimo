import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FamiliogramasPage } from './familiogramas.page';

const routes: Routes = [
  {
    path: '',
    component: FamiliogramasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FamiliogramasPage]
})
export class FamiliogramasPageModule {}
