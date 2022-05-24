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
  object:any =[];
  alldata:any;

  constructor(private formbuilder:FormBuilder,private api:ApicallService) {
    // this.api.getconnecting().subscribe(data =>{
    //   console.log(data)
    // } )
   }

  ngOnInit(): void {
    this.registerform = this.formbuilder.group(
      {
        patientname:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        confirmpassword:['',Validators.required]
      }
    )
    // console.log(this.registerform);
  }
  register(Formvalue:NgForm){
    console.log(Formvalue);
    
    this.api.signupdata(Formvalue).subscribe(data => {
      console.log(data);
      
    });
  }
  getuser(){
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching....');
      this.alldata=data;
      this.alldata=this.alldata.rows;
      console.log(this.alldata);
      for(const i in this.alldata){
        if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
          const elt = this.alldata[i];
          console.log(elt.id);
          this.api.getUserId(elt.id).subscribe(res=>{
            console.log(res);
            this.object.push(res);
            console.log('Fetched successfully');
          })
        }

      }
    
    })
  }
  deluser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(res=>{
      console.log('Your Data has been deleted from the database');
    })
     }
}
