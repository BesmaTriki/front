import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './enscomonents/footer/footer.component';
import { HeaderComponent } from './enscomonents/header/header.component';
import { SidebarComponent } from './enscomonents/sidebar/sidebar.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from "@tinymce/tinymce-angular";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    EditorModule,
    FormsModule, 
    ReactiveFormsModule,
    MdbModule 
   

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
})
export class EnssharedModule { }
