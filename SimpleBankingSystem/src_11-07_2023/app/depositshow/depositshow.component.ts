import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-depositshow',
  templateUrl: './depositshow.component.html',
  styleUrls: ['./depositshow.component.css']
})
export class DepositshowComponent {
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
deposit:any;
totalamt:any;

  holder: any;

  constructor(private stservice: HolderService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
    let accountNo = this.route.snapshot.params['accountNo'];
    this.stservice.getHolderByAccountno(accountNo).subscribe(data => {
      this.holder = data;
      this.accountNo=this.holder.accountNo;
      this.micrNo=this.holder.micrNo;
      this.pin=this.holder.pin;
      this.accType=this.holder.accType;
      this.address=this.holder.address;
      this.gender=this.holder.gender;
      this.iniBlance=this.holder.iniBlance;
      this.name=this.holder.name;
      this.dob=this.holder.dob;
      this.nationality=this.holder.nationality;
      this.religion=this.holder.religion;
      this.mobile=this.holder.mobile;
      this.secQuestion=this.holder.secQuestion;
      this.secAns=this.holder.secAns;

    });
  }

  
  updateHolders() {
    this.iniBlance=parseInt(this.iniBlance)+parseInt(this.deposit);
    this.holder = new Holder(this.accountNo, this.micrNo, this.pin, this.accType, this.address, this.gender, 
                             this.iniBlance, this.name, this.dob, this.nationality, this.religion, this.mobile, this.secQuestion, this.secAns);
    
                            
      this.stservice.updateHolder(this.holder)
      .subscribe(
        data => console.log("success", data),

      )
      alert("Deposit success");
    //this.router.navigate(['showpage'])
  }
  
  sum(){
    this.totalamt=parseInt(this.deposit)+parseInt(this.iniBlance);
  }
}
