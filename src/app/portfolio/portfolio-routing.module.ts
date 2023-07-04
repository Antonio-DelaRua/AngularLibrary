import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfComponent } from './pages/portf/portf.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'portf', component: PortfComponent},
      {path: '**', redirectTo: 'portf'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
