import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EnshomeModule } from './enseignant/enslayouts/enshome/enshome.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


import { EtudhomeModule } from './etudient/etudlayouts/etudhome/etudhome.module';
import { SitehomeModule } from './site/sitelayouts/sitehome/sitehome.module';



@NgModule({
  declarations: [
    AppComponent,
   
   
  
    
   
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnshomeModule,
    SitehomeModule,
    EtudhomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
