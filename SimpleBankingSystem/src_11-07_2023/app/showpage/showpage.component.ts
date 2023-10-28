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
          
          this.holders = response }
      );
    //this.router.navigate(["showpage"])
  }


  //Insert

  insertData() {
    this.router.navigate(["insert"])
  }

//Update

  updateHolder(accountNo: any) {
    this.router.navigate(["update", accountNo]);
  }


  //Delete

  delHolder(accountNo: any) {
     console.log(accountNo);
    this.holder = new Holder(this.accountNo, this.micrNo, this.pin, this.accType, this.address, this.gender, this.iniBlance, this.name, this.dob,
                             this.nationality, this.religion, this.mobile, this.secQuestion, this.secAns);
    this.stservice.deleteHolder(this.holder)
      .subscribe(
        data => {
          console.log("showpage");
          console.log("success", data),
          this.showholders();
        }
      );

    this.router.navigate(["showpage"]);
  }
}



