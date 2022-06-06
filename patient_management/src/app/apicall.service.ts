import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private http:HttpClient) {}
  

  //user
  signupdata(formobject:any){
    return this.http.post('http://localhost:8000/postquery',formobject)
  }
   getUser(){
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id:any){
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }
  remove(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
  }




  //admin
  getadmin(){
    return this.http.get('http://localhost:8000/getadmin/');
  }
  getadminId(id:any){
    return this.http.get(`http://localhost:8000/getadminId/${id}`);
  }
  



  //bill
  billdata(formobject:any,loginuserid:any){
    let obj={
      formobject:formobject,
      _id :loginuserid,
    }
    console.log("obj");
    return this.http.post('http://localhost:8000/postquerybill',obj)
  }
  getBill(){
    return this.http.get('http://localhost:8000/getBill/');
  }
  getBillId(id:any){
    return this.http.get(`http://localhost:8000/getBillId/${id}`);
  }
  removebill(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delbill/${id}/${id1}`);
  }




  //user-billdata's
    Userbill(userid:any,username:any){
    let obj= {
      filename:username,
      user_id : userid,
    }
    
    console.log(obj);
    return this.http.post('http://localhost:8000/postqueryUserbilldata',obj)
  }
  getUserbill(){
    return this.http.get('http://localhost:8000/getUserbilldata/');
  }
  getUserbillId(id:any){
    return this.http.get(`http://localhost:8000/getUserbilldataId/${id}`);
  }



  //Download Bill
  downBill(id:any){
    let obj={
      user_id:id
    }
    console.log(obj);
    return this.http.post('http://localhost:8000/downBill',obj);
  }
  downBillId(id:any){
    return this.http.get(`http://localhost:8000/downBillId/${id}`);
  }





  //userdownloadbill
  personalbills(filename:any,filepath:any){
    let obj={
      fname:filename,
      fpath:filepath
    }
    console.log(obj);
    return this.http.post('http://localhost:8000/userbillsave',obj,{responseType:'blob'});
  }



}
