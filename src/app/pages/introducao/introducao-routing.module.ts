import { NumberComponent } from './components/number/number.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringComponent } from './components/string/string.component';
import { IntroducaoComponent } from './introducao.component';

const routes: Routes = [
  { path: '', component: IntroducaoComponent },
  { path: 'string', component: StringComponent },
  { path: 'number', component: NumberComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroducaoRoutingModule {}
