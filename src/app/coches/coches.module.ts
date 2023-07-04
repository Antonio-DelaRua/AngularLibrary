import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CochesRoutingModule } from './coches-routing.module';
import { WikikarComponent } from './pages/wikikar/wikikar.component';
import { GarageComponent } from './pages/garage/garage.component';
import { CrearcocheComponent } from './pages/crearcoche/crearcoche.component';


@NgModule({
  declarations: [
    WikikarComponent,
    GarageComponent,
    CrearcocheComponent
  ],
  imports: [
    CommonModule,
    CochesRoutingModule
  ]
})
export class CochesModule { }
