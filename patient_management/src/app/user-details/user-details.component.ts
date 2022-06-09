import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  object:any=[];
  alldata:any;

  constructor(private api:ApicallService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.api.getUser().subscribe(data=>{
      console.log(data);
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            console.log(i);
            this.object.push(i);
      }
    })
  }

  delUser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(_res=>{
      this.toastr.success('Your Data has been deleted from the database.','Success');
    })
    window.location.reload();
     }
}
