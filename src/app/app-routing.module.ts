import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PNotFoundComponent } from './pages/p-not-found/p-not-found.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path:"accueil",
    data:{ breadcrumb:{alias:"Acceuil"} },
    component:HomeComponent
  },
  {
    path:"a-propos",
    data:{ breadcrumb:{alias:"A-propos"} },
    component:AboutComponent
  },
  {
    path:"equipe",
    data:{ breadcrumb:{alias:"Equipe"} },
    component:TeamComponent
  },
  {
    path:"contact",
    data:{ breadcrumb:{alias:"Contact"} },
    component:ContactComponent
  },
  {
   path: '',
   redirectTo: '/accueil',
   pathMatch: 'full',
  },
  {path:"**",component:PNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
