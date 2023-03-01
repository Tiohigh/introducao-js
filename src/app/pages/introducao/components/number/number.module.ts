import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRoutingModule } from './number-routing.module';
import { NumberComponent } from './number.component';


@NgModule({
  declarations: [
    NumberComponent
  ],
  imports: [
    CommonModule,
    NumberRoutingModule
  ]
})
export class NumberModule { }
