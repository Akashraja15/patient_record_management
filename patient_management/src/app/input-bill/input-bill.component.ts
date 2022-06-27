import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-bill',
  templateUrl: './input-bill.component.html',
  styleUrls: ['./input-bill.component.css']
})
export class InputBillComponent implements OnInit {
  parseduser :any;
  billinfo!:FormGroup;
  value:boolean=true;
  userdetails:any;
  constructor(private formbuilder:FormBuilder,private api:ApicallService,private toastr:ToastrService) {

    this.billinfo = this.formbuilder.group(
      {
        patientname:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        gender:['',Validators.required],
        disease:['',Validators.required],
        insurance:['',Validators.required],
        fromdate:['',Validators.required],
        todate:['',Validators.required]
      }
    )

    this.userdetails = localStorage.getItem('userdetails');
    this.parseduser = JSON.parse(this.userdetails);
    console.log(this.parseduser);
    let name = this.parseduser.name;
    this.billinfo.controls['patientname'].setValue(name)
    let phone = this.parseduser.phone;
    this.billinfo.controls['phone'].setValue(phone)
    let email = this.parseduser.email;
    this.billinfo.controls['email'].setValue(email)
    let gender = this.parseduser.gender;
    this.billinfo.controls['gender'].setValue(gender)
   }

  ngOnInit(): void {
    // method 'ngOnInit' is empty
  }
  
  bill(Formvalue:NgForm){
    let id = localStorage.getItem('loginid');
    console.log(Formvalue);
    this.toastr.success('Your Data has been Add in database.','Success');
    this.api.billData(Formvalue,id).subscribe(data => {
      console.log(data);
    },rej=>{
      console.log(rej);
    this.toastr.error('Your Data can not be Added in database.','Error');
    });
  }

}
