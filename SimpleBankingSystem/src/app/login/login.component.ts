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
  accountNo:any;
  pin: any;
  constructor(private stservice: HolderService, private router: Router) { 
    if (localStorage.getItem('accountNo')!=null){
      this.router.navigate(['user-dashboard'])
    }
}
  login() {
    let userlogin: Userlogin  = new Userlogin(this.accountNo, this.pin)
     console.log(userlogin);
    this.stservice.loginCheck(userlogin).subscribe(response => {
      console.log(response);
      if(response != null) {
        localStorage.setItem("accountNo", this.accountNo);
        localStorage.setItem("userid", response.accountNo)
        
        this.router.navigate(['user-dashboard']);
        
      } else {
        alert("Username or Password is wrong or account is deactive, please contact customer care");
      }
    })
  }

}
  

