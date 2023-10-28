import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-viewbalance',
  templateUrl: './viewbalance.component.html',
  styleUrls: ['./viewbalance.component.css']
})
export class ViewbalanceComponent {

  accountNo:any;
  iniBlance: any;
  name: any;
  // holder: any;
  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) {
    // this.showholders();
  }
  viewBalance() {
    this.stservice.getHolderByAccountno(this.accountNo).subscribe(data => {
      // this.holder = data;
      // this.accountNo=this.holder.accountNo;
      
      this.iniBlance=data.iniBlance;
      this.name=data.name;
     
    });
    // this.router.navigate(["viewbalance", accountNo]);
  }

 
}
