import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashbroadComponent } from './admindashbroad/admindashbroad.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { InputBillComponent } from './input-bill/input-bill.component';
import { BillingStatusComponent } from './billing-status/billing-status.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    AdminloginComponent,
    PatientloginComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    AdmindashbroadComponent,
    MainNavComponent,
    UserDetailsComponent,
    PatientDashboardComponent,
    PaymentComponent,
    InputBillComponent,
    BillingStatusComponent,
    ViewBillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
