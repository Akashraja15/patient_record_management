import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  object:any=[];
  alldata:any;
  flag = 0;
  adminform!:FormGroup;

  constructor(private formbuilder:FormBuilder,private api:ApicallService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.adminform = this.formbuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required],
      }
    )
    this.api.getAdmin().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching....');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            console.log(i);
            this.object.push(i);
      }
    })
  }

  adminFormsData(formvalue: any){
    for(const i  of this.object){
       if(i.username ==  formvalue.username && i.password == formvalue.password){
           this.flag = 1;
       }
    }
     if(this.flag == 1 ){
      this.toastr.success("Valid to access");
       this.router.navigate(['/admindashboard'])
     }
     else{
      this.toastr.error("Invalid User");
     }
 }

}
