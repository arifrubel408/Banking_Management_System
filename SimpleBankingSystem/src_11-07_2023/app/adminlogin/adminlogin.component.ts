import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Adminlogin } from '../adminlogin';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  email:any;
  password: any;
  constructor(private stservice: HolderService, private router: Router) { }
  login1() {
    let adminlogin: Adminlogin  = new Adminlogin(this.email, this.password)
    console.log(adminlogin);
    this.stservice.loginCheck1(adminlogin).subscribe(response => {
       console.log(response);
      if(response != null) {
        this.router.navigate(['dashboard']);
        
      } else {
        alert("Username or Password is wrong");
      }
    })
  }
}
