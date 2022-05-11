import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashbroadComponent } from './admindashbroad/admindashbroad.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'patient',component:PatientloginComponent},
  {path:'signup',component:UserformComponent},
  {path:'contact',component:ContactusComponent},
  {path:'about',component:AboutusComponent},
  {path:'admindashboard',component:AdmindashbroadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
