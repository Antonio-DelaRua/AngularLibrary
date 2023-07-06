import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { CochesRoutingModule } from './coches-routing.module';
import { WikikarComponent } from './pages/wikikar/wikikar.component';
import { GarageComponent } from './pages/garage/garage.component';
import { CrearcocheComponent } from './pages/crearcoche/crearcoche.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//clases de firebase
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//configuracion de firebase
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [
   
    WikikarComponent,
    GarageComponent,
    CrearcocheComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CochesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
   
  ]
})
export class CochesModule { }
