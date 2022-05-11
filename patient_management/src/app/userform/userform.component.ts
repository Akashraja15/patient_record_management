import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  registerform!:FormGroup;
  constructor(private formbuilder:FormBuilder,private api:ApicallService) {
    this.api.getconnecting().subscribe(data =>{
      console.log(data)
    } )
   }

  ngOnInit(): void {
    this.registerform = this.formbuilder.group(
      {
        patientname:['',Validators.required],
        phone:['',Validators.required,]
      }
    )
  }

}
