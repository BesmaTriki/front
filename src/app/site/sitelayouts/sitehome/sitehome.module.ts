import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesharedModule } from '../../siteshared/siteshared.module';
import { RouterModule } from '@angular/router';
import { SitehomeComponent } from './sitehome.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../../sitemodules/register/register.component';
import { LoginComponent } from '../../sitemodules/login/login.component';
import { SihomeComponent } from '../../sitemodules/sihome/sihome.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SitehomeComponent,
    SihomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SitesharedModule   
  ]
})
export class SitehomeModule { }
