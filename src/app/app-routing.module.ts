import { PlaceholderPiece } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {path:'about' ,component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'project',component:ProjectsComponent},
  {path:'placeorder',component:PlaceorderComponent},
  {path:'logout',component:LogoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
