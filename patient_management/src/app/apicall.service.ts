import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private http:HttpClient) {}
  

  //user
  signUpData(formobject:any){
    return this.http.post('http://localhost:8000/signUp',formobject)
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
  getAdmin(){
    return this.http.get('http://localhost:8000/getAdmin/');
  }
  getAdminId(id:any){
    return this.http.get(`http://localhost:8000/getAdminId/${id}`);
  }
  

  


  //bill
  billData(formobject:any,loginuserid:any){
    let obj={
      formobject:formobject,
      _id :loginuserid,
    }
    console.log("obj");
    return this.http.post('http://localhost:8000/postQueryBill',obj)
  }
  getBill(){
    return this.http.get('http://localhost:8000/getBill/');
  }
  getBillId(id:any){
    return this.http.get(`http://localhost:8000/getBillId/${id}`);
  }
  removeBill(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delBill/${id}/${id1}`);
  }




  //admindownload bill
    userBill(userid:any,username:any){
    let obj= {
      filename:username,
      user_id : userid,
    }
    
    console.log(obj);
    return this.http.post('http://localhost:8000/postQueryUserBillData',obj)
  }
  getUserbill(){
    return this.http.get('http://localhost:8000/getUserBillData/');
  }
  getUserBillId(id:any){
    return this.http.get(`http://localhost:8000/getUserBillDataId/${id}`);
  }



  //userDownload Bill
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
  personalBills(filename:any,filepath:any){
    let obj={
      fname:filename,
      fpath:filepath
    }
    console.log(obj);
    return this.http.post('http://localhost:8000/userBillSave',obj,{responseType:'blob'});
  }

}
