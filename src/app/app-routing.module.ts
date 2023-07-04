import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'coches', loadChildren: () => import('./coches/coches.module').then(m => m.CochesModule)},
  {path: 'portf', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  {path: '**', redirectTo: 'auth'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
