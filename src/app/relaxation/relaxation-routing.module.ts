import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelaxationPage } from './relaxation.page';

const routes: Routes = [
  {
    path: '',
    component: RelaxationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelaxationPageRoutingModule {}
