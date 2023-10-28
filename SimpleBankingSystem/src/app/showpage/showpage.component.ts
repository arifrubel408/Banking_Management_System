import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})
export class ShowpageComponent {
  accountNo: any;
  micrNo: any;
  pin: any;
  email: any;
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
  img: any;
  status: any;

  holder: any;
  holders: any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) {
    // this.showholders();
  }

  ngOnInit() {
    this.showholders();
  }
  showholders() {
    // console.log("ksjdfk");

    this.stservice.getHolders()
      .subscribe(
        response => {
          // console.log(response);

          this.holders = response
        }
      );
    //this.router.navigate(["showpage"])
  }


  //Insert

  insertData() {
    this.router.navigate(["insert"])
  }
  goDashboard() {
    this.router.navigate(["dashboard"])
  }

  //Update

  updateHolder(accountNo: any) {
    this.router.navigate(["update", accountNo]);
  }


  //Delete

  delHolder(accountNo: any) {
    // console.log(accountNo);
    this.holder = new Holder(accountNo, this.micrNo, this.pin, this.email, this.accType, this.address, this.gender, this.iniBlance, this.name, this.dob, this.nationality, this.religion, this.mobile, this.secQuestion, this.secAns, this.img, this.status);
    this.stservice.deleteHolder(this.holder).subscribe(data => {
          // console.log("showpage");
          console.log("success", data),
            this.showholders();
        }
      );

    this.router.navigate(["showpage"]);
  }

  updateStatus(accountNo1: number, status1: string) {
    if (status1 == "active") {
      this.holder = new Holder(accountNo1, this.micrNo, this.pin, this.email, this.accType, this.address, this.gender,
        this.iniBlance, this.name, this.dob, this.nationality, this.religion, this.mobile, this.secQuestion, this.secAns, this.img, "deactive");
      this.stservice.updateHolderStatus(this.holder).subscribe(data => {
        console.log(data);
        this.showholders();
      })

    } else {
      this.holder = new Holder(accountNo1, this.micrNo, this.pin, this.email, this.accType, this.address, this.gender,
        this.iniBlance, this.name, this.dob, this.nationality, this.religion, this.mobile, this.secQuestion, this.secAns, this.img, "active");
      this.stservice.updateHolderStatus(this.holder).subscribe(data => {
        console.log(data);
        this.showholders();
      })
    }
    console.log(this.holder);

  }
}



