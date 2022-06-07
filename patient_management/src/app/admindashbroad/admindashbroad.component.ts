import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../shared/authservice.service';

@Component({
  selector: 'app-admindashbroad',
  templateUrl: './admindashbroad.component.html',
  styleUrls: ['./admindashbroad.component.css']
})
export class AdmindashbroadComponent implements OnInit {

  constructor(private router:Router,private authserve:AuthserviceService) { /* constructor is empty */  }

  ngOnInit(): void {
    // method 'ngOnInit' is empty
  
  }

  logout() {
    this.authserve.logout();  
    this.router.navigate(['admin']);
  }

}
