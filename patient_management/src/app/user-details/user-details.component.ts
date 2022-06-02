import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  object:any=[];
  alldata:any;

  constructor(private api:ApicallService) { }

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

  deluser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(res=>{
      alert('Your Data has been deleted from the database.');
      location.reload();
    })
     }
}
