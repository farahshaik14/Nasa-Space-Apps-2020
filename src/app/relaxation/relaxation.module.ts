import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelaxationPageRoutingModule } from './relaxation-routing.module';

import { RelaxationPage } from './relaxation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelaxationPageRoutingModule
  ],
  declarations: [RelaxationPage]
})
export class RelaxationPageModule {}
