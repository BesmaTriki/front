import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnscourseComponent } from './enseignant/ensmodules/enscourse/enscourse.component';
import { EnsdashboardComponent } from './enseignant/ensmodules/ensdashboard/ensdashboard.component';
import { EnsprofileComponent } from './enseignant/ensmodules/ensprofile/ensprofile.component';

import { EnshomeComponent } from './enseignant/enslayouts/enshome/enshome.component';
import { CourslistComponent } from './enseignant/ensmodules/courslist/courslist.component';
import { CalendrierComponent } from './enseignant/ensmodules/calendrier/calendrier.component';
import { SitehomeComponent } from './site/sitelayouts/sitehome/sitehome.component';
import { SihomeComponent } from './site/sitemodules/sihome/sihome.component';
import { LoginComponent } from './site/sitemodules/login/login.component';
import { RegisterComponent } from './site/sitemodules/register/register.component';
import { EtudhomeComponent } from './etudient/etudlayouts/etudhome/etudhome.component';
import { EnsmessageComponent } from './enseignant/ensmodules/ensmessage/ensmessage.component';
import { EtuddashboardComponent } from './etudient/etudmodules/etuddashboard/etuddashboard.component';
import { EtudprofileComponent } from './etudient/etudmodules/etudprofile/etudprofile.component';
import { EtudmessageComponent } from './etudient/etudmodules/etudmessage/etudmessage.component';
import { EtudcoursComponent } from './etudient/etudmodules/etudcours/etudcours.component';

const routes: Routes = [
  {path: 'enshome',
  component: EnshomeComponent,
  children: [{
  path: 'ensdashboard',
  component:EnsdashboardComponent
  },
  {path: 'addcours',
  component:EnscourseComponent
},
{path: 'cours',
  component:CourslistComponent
},
{path: 'Ensprofile',
component:EnsprofileComponent
},
{path: 'calendrier',
component:CalendrierComponent
},
{path: 'enmessage',
component:EnsmessageComponent
},

]},
{path: '',
component: SitehomeComponent,
children: [{
path: '',
component:SihomeComponent
},
{path: 'login',
component:LoginComponent
},
{path: 'register',
component:RegisterComponent
}

]},
{path: 'etudhome',
component: EtudhomeComponent,
children: [{
path: 'etuddashboard',
component:EtuddashboardComponent
},
{path: 'prof',
component:EtudprofileComponent
},
{path: 'message',
component:EtudmessageComponent
},
{path: 'cr',
component:EtudcoursComponent
}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
