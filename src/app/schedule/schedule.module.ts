import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import { SchedulePage } from './schedule.page';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
  ],
  declarations: [SchedulePage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class SchedulePageModule {}
