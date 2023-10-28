import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HolderService } from '../holder.service';
import { Userlogin } from '../userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accountno:any;
  pin: any;
  constructor(private stservice: HolderService, private router: Router) { }
  login() {
    let userlogin: Userlogin  = new Userlogin(this.accountno, this.pin)
    // console.log(userlogin);
    this.stservice.loginCheck(userlogin).subscribe(response => {
      console.log(userlogin);
      if(response != null) {
        this.router.navigate(['home']);
        
      } else {
        alert("Username or Password is wrong");
      }
    })
  }
}
