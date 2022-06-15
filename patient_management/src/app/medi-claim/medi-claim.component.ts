import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medi-claim',
  templateUrl: './medi-claim.component.html',
  styleUrls: ['./medi-claim.component.css']
})
export class MediClaimComponent implements OnInit {
  parseduser :any;
  medinfo!:FormGroup;
  value:boolean=true;
  userdetails:any;
  constructor(private formbuilder:FormBuilder,private api:ApicallService,private toastr:ToastrService) { 

    this.medinfo = this.formbuilder.group(
      {
        patientname:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        gender:['',Validators.required],
        disease:['',Validators.required],
        medical:['',Validators.required],
      }
    )

    this.userdetails = localStorage.getItem('userdetails');
    this.parseduser = JSON.parse(this.userdetails);
    console.log(this.parseduser);
    let name = this.parseduser.name;
    this.medinfo.controls['patientname'].setValue(name)
    let phone = this.parseduser.phone;
    this.medinfo.controls['phone'].setValue(phone)
    let email = this.parseduser.email;
    this.medinfo.controls['email'].setValue(email)
    let gender = this.parseduser.gender;
    this.medinfo.controls['gender'].setValue(gender)

  }

  ngOnInit(): void {
    // method 'ngOnInit' is empty
  }

  medi(Formvalue:NgForm){
    let id = localStorage.getItem('loginid');
    console.log(Formvalue);
    this.toastr.success('Your Data has been Add in database.','Success');
    this.api.mediData(Formvalue,id).subscribe(data => {
      console.log(data);
    },rej=>{
      console.log(rej);
    this.toastr.error('Your Data can not be Added in database.','Error');
    });
  }

}
