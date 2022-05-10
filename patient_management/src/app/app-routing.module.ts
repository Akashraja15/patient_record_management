import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'patient',component:PatientloginComponent},
  {path:'signup',component:UserformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
