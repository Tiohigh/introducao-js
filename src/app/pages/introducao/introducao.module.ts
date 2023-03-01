import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroducaoRoutingModule } from './introducao-routing.module';
import { IntroducaoComponent } from './introducao.component';


@NgModule({
  declarations: [
    IntroducaoComponent
  ],
  imports: [
    CommonModule,
    IntroducaoRoutingModule
  ]
})
export class IntroducaoModule { }
