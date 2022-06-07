import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { /* this constructor is empty */  }

  logout():void {
    localStorage.setItem('isLoggedin','false');
    localStorage.removeItem('token');
  }
}
