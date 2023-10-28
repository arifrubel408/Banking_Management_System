import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent {
accountNo:any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) {
    // this.showholders();
  }
  updatedeposit(accountNo: any) {
    accountNo=this.accountNo;
    this.router.navigate(["deposite", accountNo]);
  }
}
