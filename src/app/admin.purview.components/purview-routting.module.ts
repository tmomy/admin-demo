import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurviewComponent } from './purview.component';

const purviewRoutes: Routes = [
  { path: 'purviews', component: PurviewComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(purviewRoutes)
  ],
  exports: [
    RouterModule
  ]
  })

export class PurviewRouttingModule { }
