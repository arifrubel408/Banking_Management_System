import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';
import { Transections } from '../transections';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent {
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

  deposite_date:any;
  deposit:any;
  totalamt:any;

  holder: any;

  constructor(private stservice: HolderService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){   // for search Data
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
      this.img=this.holder.img;
    });
  }

  
  updateHolders() {     //for button 
    this.iniBlance=parseInt(this.iniBlance)+parseInt(this.deposit);
    this.holder = new Holder(this.accountNo, this.micrNo, this.pin, this.accType, this.address, this.gender, 
                             this.iniBlance, this.name, this.dob, this.nationality, this.religion, this.mobile, 
                             this.secQuestion, this.secAns, this.img);
    
                            
                             
      this.stservice.updateHolder(this.holder)
      .subscribe(
        data => console.log("success", data),

      )
      let t = new Transections(null, this.accountNo,'deposite', this.deposit,new Date().toISOString(),'')
      this.stservice.insertTransection(t).subscribe(data=>{
        console.log(data)
      })
      alert("Deposit successful");
      this.router.navigate(['dashboard'])
  }
  
  sum(){
    this.totalamt=parseInt(this.deposit)+parseInt(this.iniBlance);
  }

  updatedeposit(accountNo: any) {
    accountNo=this.accountNo;
    this.router.navigate(["deposite", accountNo]);
  }


}
