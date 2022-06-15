import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-claim-status',
  templateUrl: './claim-status.component.html',
  styleUrls: ['./claim-status.component.css']
})
export class ClaimStatusComponent implements OnInit {

  object:any=[];
  alldata:any;
  flag = 0;
  constructor(private api:ApicallService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.api.getMediBill().subscribe(data=>{
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

  deletes(data:any,data1:any){
    this.api.removeMediBill(data._id,data1._rev).subscribe(_res=>{
      this.toastr.success("Your Data has been deleted from the database.",'Success');
    })
    window.location.reload();
  }

}