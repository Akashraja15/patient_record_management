import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    var obj={
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
  Userbill(){
    // Userbill(userid:any,username:any){
    var obj= {
      // filename:username,
      // user_id : userid,
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



}
