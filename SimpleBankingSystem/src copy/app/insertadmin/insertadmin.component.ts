import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-insertadmin',
  templateUrl: './insertadmin.component.html',
  styleUrls: ['./insertadmin.component.css']
})
export class InsertadminComponent {
  id:any;
  adminUsername:any;
  password:any;
  email:any;
  dob:any;
  address:any;
  gender:any;
  phone:any;   
  img?:any;

  admin:any;

  constructor(private stservice: HolderService, private router: Router) { }      //(last: private router:Router) er joono *****
ngOnInit(){
  this.stservice.getNewAdminId().subscribe((data) => {
    this.id = data;
  });
}

  saveAdmin() {		// html tamplate call (submit)="saveAdmin()" btnType="submit"  or 

    this.admin = new Admin(this.id, this.adminUsername, this.password, this.email, this.dob, this.address, this.gender,this.phone, this.img);
   // console.log(this.admin);
    this.stservice.insertAdmin(this.admin)
      .subscribe(
        data => console.log("success", data),

      )
      alert("Account successfully created");
    this.router.navigate(['adminprofile'])    //send other page for this *****
  }
}
