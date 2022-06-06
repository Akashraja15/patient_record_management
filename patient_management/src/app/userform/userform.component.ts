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
        email:['',Validators.required],
        gender:['',Validators.required],
        password:['',Validators.required],
        confirmpassword:['',Validators.required]
      }
    )
  }
  register(Formvalue:NgForm){
    console.log(Formvalue);
    window.location.reload(); //double click
    this.api.signupdata(Formvalue).subscribe(data => {
      console.log(data);
    });
  }
}
