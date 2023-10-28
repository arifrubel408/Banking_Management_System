import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  id: any;
  adminUsername: any;
  password: any;
  email: any;
  dob: any;
  address: any;
  gender: any;
  phone: any;


  admin: any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.stservice.getadminById(id).subscribe(data => {
      this.admin = data;
      this.id = this.admin.id;
      this.adminUsername = this.admin.adminUsername;
      this.password = this.admin.password;
      this.email = this.admin.email;
      this.dob = this.admin.dob;
      this.address = this.admin.address;
      this.gender = this.admin.gender;
      this.phone = this.admin.phone;


    });
  }
  

}
