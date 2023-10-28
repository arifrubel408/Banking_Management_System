import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
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

  userShow() {		
    console.log('userprofile');
    let userid = localStorage.getItem("userid");
     this.router.navigate(['userprofile', userid])    //send other page for this *****
  }
  logOut1(){
    localStorage.removeItem("accountNo");
    this.router.navigate(['home']);
  }

  ngOnInit() { // method auto calling
    this.getUserName();
    //this.showAvailableBalance(); 
  }

  //holder name show in dashboard
  ads: Holder = new Holder();
  id1 : any = localStorage.getItem('userid');
  getUserName(){
    this.stservice.getHolderByAccountno(this.id1).subscribe((data) => {
      console.log(data);
      this.ads.accountNo=data.accountNo;
      this.ads.name=data.name;
      this.ads.iniBlance=data.iniBlance;
      this.ads.img=data.img;
    })
  }

  
  //row count total holder no
  // balance: Holder = new Holder();
  
  // showAvailableBalance() {
  //   this.stservice.getholderByAccountno1(this.accountNo)
  //     .subscribe(response => {
  //       this.balance.iniBlance = response.iniBlance;
  //       });
  // }

}
