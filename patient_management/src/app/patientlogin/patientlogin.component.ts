import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {

  alldata :any;
  flag = 0;
  object:any=[];
  patientform!:FormGroup;
  constructor(private formbuilder:FormBuilder,private api:ApicallService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.patientform = this.formbuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required],

      }
    )

    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            this.object.push(i);
            console.log('Fetched successfuly');
          }
      });
   
    }

  userFormData(formvalue:any){
    console.log(formvalue);
    for(const i  of this.object){
      if(i.patientname ==  formvalue.username && i.password == formvalue.password){
          this.flag = 1;
        localStorage.setItem('loginid',i._id);
          
          let patientdetails:any = {
              name:i.patientname,
              phone:i.phone,
              email:i.email,
              gender:i.gender,
          }
          localStorage.setItem('userdetails',JSON.stringify(patientdetails));
      }
    }
    if(this.flag == 1 ){
      this.toastr.success("Valid to access",'Success');
      this.router.navigate(['/patientdashboard'])
    }
    else{
      this.toastr.error("Invalid Username or Password","Error");
    }
  }  
}
