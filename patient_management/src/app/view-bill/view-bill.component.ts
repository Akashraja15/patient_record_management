import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import {saveAs} from 'file-saver' ;

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  object:any=[];
  alldata:any;
  flag = 0;

  constructor(private api:ApicallService) { }

  ngOnInit(): void {

    let id = localStorage.getItem('loginid');
    console.log(id);
    this.api.downBill(id).subscribe(data=>{
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



  userDownloadBills(filename:any, filepath:any){
    console.log(filename);
    console.log(filepath);
    this.api.personalBills(filename,filepath).subscribe((data:any)=>{
      console.log(data);
    saveAs(data, filename)
    })
  }

}