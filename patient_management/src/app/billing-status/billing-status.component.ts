import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-billing-status',
  templateUrl: './billing-status.component.html',
  styleUrls: ['./billing-status.component.css']
})
export class BillingStatusComponent implements OnInit {

  object:any=[];
  alldata:any;
  flag = 0;

  constructor(private api:ApicallService) { }

  ngOnInit(): void {

    this.api.getBill().subscribe(data=>{
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
    this.api.removebill(data._id,data1._rev).subscribe(res=>{
      alert('Your Data has been deleted from the database.');
      location.reload();
    })
    }
    

  genbillid(parameter:any,parameter1:any){
    console.log(parameter);
    console.log(parameter1);
    localStorage.setItem('object',parameter);
    localStorage.setItem('name',parameter1);   
}

}
