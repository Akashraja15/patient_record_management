import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  registerform!:FormGroup;
  value:boolean=true;

  constructor(private formbuilder:FormBuilder,private api:ApicallService,private toastr:ToastrService) {
   }

  ngOnInit(): void {
    this.registerform = this.formbuilder.group(
      {
        patientname:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        gender:['',Validators.required],
        password:['',Validators.required],
        confirmpassword:['',Validators.required]
      }
    )
  }
  register(Formvalue:NgForm){
    this.toastr.success('Registered Successfully',"Success")
    console.log(Formvalue);
    window.location.reload();
    this.api.signUpData(Formvalue).subscribe(data => {
      console.log(data);
    });
  }
}
