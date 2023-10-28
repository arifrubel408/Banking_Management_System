import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  accountNo: any;
    micrNo: any;
    pin: any;
    accType: any;
    address: any;
    gender: any;
    iniBlance: any;
    name: any;
    dob: any;
    nationality: any;
    religion: any;
    mobile: any;
    secQuestion: any;
    secAns: any;
    img:any;

    holder: any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let accountNo = this.route.snapshot.params['id'];
    this.stservice.getholderByAccountno1(accountNo).subscribe(data => {
      this.holder = data;
      this.accountNo = this.holder.accountNo;
      this.name = this.holder.name;
      this.iniBlance = this.holder.iniBlance;
      this.dob = this.holder.dob;
      this.address = this.holder.address;
      this.gender = this.holder.gender;
      this.mobile = this.holder.mobile;
      this.religion = this.holder.religion;
      this.accType = this.holder.accType;
      this.nationality = this.holder.nationality;
      this.img=this.holder.img;
    });
  }
}
