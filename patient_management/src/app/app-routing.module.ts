import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashbroadComponent } from './admindashbroad/admindashbroad.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BillingStatusComponent } from './billing-status/billing-status.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { InputBillComponent } from './input-bill/input-bill.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PaymentComponent } from './payment/payment.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserformComponent } from './userform/userform.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { MediClaimComponent } from './medi-claim/medi-claim.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'patient',component:PatientloginComponent},
  {path:'signup',component:UserformComponent},
  {path:'contact',component:ContactusComponent},
  {path:'about',component:AboutusComponent},
  {path:'admindashboard',component:AdmindashbroadComponent},
  {path:'details',component:UserDetailsComponent},
  {path:'inputbill',component:InputBillComponent},
  {path:'billingstatus',component:BillingStatusComponent},
  {path:'patientdashboard',component:PatientDashboardComponent},
  {path:'payment',component:PaymentComponent},
  {path:'viewbill',component:ViewBillComponent},
  {path:'medinfo',component:MediClaimComponent},
  {path:'adminclaim',component:ClaimStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
