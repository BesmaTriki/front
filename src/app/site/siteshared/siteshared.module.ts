import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './sitecomponents/footer/footer.component';
import { HeaderComponent } from './sitecomponents/header/header.component';

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
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
      MatSidenavModule,
       MatToolbarModule,
       MatIconModule,  
       MatButtonModule,
        
      FlexLayoutModule,
         MatMenuModule, 
          MatListModule,
           RouterModule 
  ],
 exports: [
    FooterComponent,
    HeaderComponent
  ],
})
export class SitesharedModule { }
