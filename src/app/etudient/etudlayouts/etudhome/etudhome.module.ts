import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudsharedModule } from '../../etudshared/etudshared.module';
import {EtuddashboardComponent } from '../../etudmodules/etuddashboard/etuddashboard.component';
import {EtudprofileComponent } from '../../etudmodules/etudprofile/etudprofile.component';
import {EtudmessageComponent } from '../../etudmodules/etudmessage/etudmessage.component';

import { RouterModule } from '@angular/router';
import { EtudhomeComponent } from './etudhome.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditorModule } from "@tinymce/tinymce-angular";
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EtudhomeComponent,
    EtudmessageComponent,
    EtudprofileComponent,
    EtuddashboardComponent
  ],
  imports: [
    CommonModule,
    EtudsharedModule,
    RouterModule,
    MatSidenavModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EtudhomeModule { }
