import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

  accountNo: any;
  micrNo: any;
  pin: any;
  email:any;
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
  status:any;

  holder: any;

  constructor(private stservice: HolderService, private router: Router) { }      //(last: private router:Router) er joono *****

  ngOnInit() {
    this.micrNo = this.getRandomNumber(1000, 9999);
    this.pin = this.getRandomNumber(100000, 999999);
    this.stservice.getNewAccountNo().subscribe((data) => {
      this.accountNo = data;
    });
  }

  saveHolder() {		// html tamplate call (submit)="saveHolder()" btnType="submit"  or 

    this.holder = new Holder(this.accountNo, this.micrNo, this.pin, this.email, this.accType, this.address, this.gender, this.iniBlance, this.name, this.dob, this.nationality, this.religion, this.mobile, this.secQuestion, this.secAns, this.img, this.status);
    this.stservice.insertHolder(this.holder)
      .subscribe(
        data => console.log("success", data),

      )
      alert("Account created successfully")
    this.router.navigate(['showpage'])    //send other page for this *****
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
