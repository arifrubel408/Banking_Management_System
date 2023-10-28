import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePin } from '../change-pin';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css']
})
export class ChangepinComponent {
  accountNo: any;
  oldPin: any;
  newPin: any;
  retypePin: any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) { }

  changePassword() {
    if (this.newPin == this.retypePin) {
      let p = new ChangePin(this.accountNo, this.oldPin, this.newPin);
      this.stservice.changePassword(p).subscribe(data => {
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
