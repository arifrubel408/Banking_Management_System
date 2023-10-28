import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';
import { Transections } from '../transections';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent {
  accountNo:any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) {
    // this.showholders();
  }
  updatewithdrawal(accountNo: any) {
    accountNo=this.accountNo;
    this.router.navigate(["withdrawal", accountNo]);
  }


  // 2nd part
  // accountNo: any;
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
  status:any;
  img:any;

  withdrawal_date:any;
  withdraw:any;
  totalamt:any;

  holder: any;

 

  ngOnInit(){
    let accountNo = this.route.snapshot.params['accountNo'];
    this.stservice.getHolderByAccountno(accountNo).subscribe(data => {
      this.holder = data;
      this.accountNo=this.holder.accountNo;
      this.micrNo=this.holder.micrNo;
      this.pin=this.holder.pin;
      this.email=this.holder.email;
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
      this.status=this.holder.status;
      this.img=this.holder.img;
    });
  }

  
  updateHolders() {
    this.iniBlance=(parseInt(this.iniBlance))-(parseInt(this.withdraw));
    this.holder = new Holder(this.accountNo, this.micrNo, this.pin, this.email, this.accType, this.address, this.gender, this.iniBlance, this.name, this.dob, this.nationality, this.religion, this.mobile, this.secQuestion, this.secAns, this.img, this.status);
        
      this.stservice.updateHolder(this.holder).subscribe( data => 
        console.log("success", data),
      )
      let t = new Transections(null, this.accountNo,'withdraw', this.withdraw, new Date().toISOString(),'')
      this.stservice.insertTransection(t).subscribe(data=>{
        console.log(data)
      })
      alert("Withdrawl successfull");
      this.router.navigate(['dashboard'])
  }
  
  reduce(){
    this.totalamt=(parseInt(this.iniBlance))-(parseInt(this.withdraw));
  }
}
