import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminChangePin } from '../admin-change-pin';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-adminchangepin',
  templateUrl: './adminchangepin.component.html',
  styleUrls: ['./adminchangepin.component.css']
})
export class AdminchangepinComponent {
  id:any; 
  oldPassword:any;
  newPassword:any;
  retypePassword:any;

  constructor(private stservice: HolderService, private router: Router,private route: ActivatedRoute) { }

  changePassword() {
    if (this.newPassword == this.retypePassword) {
      let w = new AdminChangePin(this.id, this.oldPassword, this.newPassword);
      this.stservice.changePassword1(w).subscribe(data => {
        if(data) {
          alert("password updated");
        } else {
          alert("Old password is incorrect");
        }
      });
    } else {
      alert("Password Doesn't match")
    }
  }

  goHome() {
    this.router.navigate(["home"])
  }
}
