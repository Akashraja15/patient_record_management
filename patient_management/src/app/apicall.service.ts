import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private http:HttpClient) {}
  //  getconnecting()
  //  {
  //     return this.http.get('http://localhost:8000/senddata');
  //  }
   signupdata(formobject:any){
    return this.http.post('http://localhost:8000/postquery',formobject)
   }
}
