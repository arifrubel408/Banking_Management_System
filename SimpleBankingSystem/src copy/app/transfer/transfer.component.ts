import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolderService } from '../holder.service';
import { Transections } from '../transections';
import { Updatetransfer } from '../updatetransfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
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

  transfer_date:any;

  transfer1: any;
  transfer2: any;
  totalamt1: any;
  totalamt2: any;
  holder: any;

  holder1: any;
  holder2: any;
  accountNo1: any;
  accountNo2: any;
  iniBlance1: any;
  iniBlance2: any;
  name1: any;
  name2: any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) { }

  updateHolders() {

    let acc1 = parseInt(this.iniBlance1) - parseInt(this.transfer1);
    let acc2 = parseInt(this.iniBlance2) + parseInt(this.transfer2);

    let upp1: Updatetransfer = new Updatetransfer(this.accountNo1, acc1);
    let upp2: Updatetransfer = new Updatetransfer(this.accountNo2, acc2);

    this.stservice.updateTransfer(upp1)
      .subscribe(
        data => console.log("success1", data),
      );

    this.stservice.updateTransfer(upp2)
      .subscribe(
        data => console.log("success2", data),
      );

      let t = new Transections(null, this.accountNo1,'withdraw', this.transfer1,new Date().toISOString(),'transfer')
      this.stservice.insertTransection(t).subscribe(data=>{
        console.log(data)
      })
      let t1 = new Transections(null, this.accountNo2,'deposite', this.transfer1,new Date().toISOString(),'received')
      this.stservice.insertTransection(t1).subscribe(data=>{
        console.log(data)
      })
    alert("Transfer successful");
    this.router.navigate(['dashboard'])
  }

  deduct() {
    this.totalamt1 = parseInt(this.iniBlance1) - parseInt(this.transfer1);
    this.transfer2 = parseInt(this.transfer1);
    this.totalamt2 = parseInt(this.iniBlance2) + parseInt(this.transfer2);
  }

  
  updatedtransfer() {
    this.stservice.getHolderByAccountno(this.accountNo1).subscribe(data => {
      this.accountNo1 = data.accountNo;
      this.iniBlance1 = data.iniBlance;
      this.name1 = data.name;
    });
  }
  updatedtransfer1() {
    this.stservice.getHolderByAccountno(this.accountNo2).subscribe(data => {
      this.accountNo2 = data.accountNo;
      this.iniBlance2 = data.iniBlance;
      this.name2 = data.name;
    });
  }
}
