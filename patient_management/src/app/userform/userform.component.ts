import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  registerform!:FormGroup;
  value:boolean=true;

  constructor(private formbuilder:FormBuilder,private api:ApicallService) {
   }

  ngOnInit(): void {
    this.registerform = this.formbuilder.group(
      {
        patientname:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required,Validators.pattern('[a-zA-Z0-9]*@gmail.com')],
        gender:['',Validators.required],
        password:['',Validators.required,Validators.pattern('[A-Za-z0-9@!_]{6,}')],
        confirmpassword:['',Validators.required,Validators.pattern('[A-Za-z0-9@!_]{6,}')]
      }
    )
  }
  register(Formvalue:NgForm){
    console.log(Formvalue);
    window.location.reload(); //double click
    this.api.signUpData(Formvalue).subscribe(data => {
      console.log(data);
    });
  }
}
