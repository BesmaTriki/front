import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnssharedModule } from '../../ensshared/ensshared.module';
import { EnsdashboardComponent } from '../../ensmodules/ensdashboard/ensdashboard.component';
import { EnscourseComponent } from '../../ensmodules/enscourse/enscourse.component';
import { CalendrierComponent } from '../../ensmodules/calendrier/calendrier.component';
import { RouterModule } from '@angular/router';
import { EnshomeComponent } from './enshome.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditorModule } from "@tinymce/tinymce-angular";
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CourslistComponent } from '../../ensmodules/courslist/courslist.component';


@NgModule({
  declarations: [
    EnshomeComponent,
    EnsdashboardComponent,
    EnscourseComponent,
CalendrierComponent,
CourslistComponent
  
   
  ],
  imports: [
    CommonModule,
    EnssharedModule,
    RouterModule,
    MatSidenavModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnshomeModule { }
