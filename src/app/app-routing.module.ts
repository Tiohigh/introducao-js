import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'introducao', loadChildren: () => import('./pages/introducao/introducao.module').then(m => m.IntroducaoModule) }, { path: 'string', loadChildren: () => import('./pages/introducao/components/string/string.module').then(m => m.StringModule) }, { path: 'number', loadChildren: () => import('./pages/introducao/components/number/number.module').then(m => m.NumberModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
