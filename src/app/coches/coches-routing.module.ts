import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikikarComponent } from './pages/wikikar/wikikar.component';
import { GarageComponent } from './pages/garage/garage.component';
import { CrearcocheComponent } from './pages/crearcoche/crearcoche.component';

const routes: Routes = [
  {path: '',
   children: [
    {path: 'wikikar', component: WikikarComponent},
    {path: 'garage', component: GarageComponent},
    {path: 'crearcoche', component: CrearcocheComponent},
    {path: '**', redirectTo: 'wikikar'}
   ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CochesRoutingModule { }
