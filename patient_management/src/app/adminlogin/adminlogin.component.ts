import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminform!:FormGroup;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.adminform = this.formbuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required],
      }
    )
  }

}
