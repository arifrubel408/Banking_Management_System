import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { Adminlogin } from '../adminlogin';
import { Adminrow } from '../adminrow';
import { Holder } from '../holder';
import { HolderService } from '../holder.service';
import { Rowcount } from '../rowcount';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  id: any;
  adminUsername: any;
  password: any;
  email: any;
  dob: any;
  address: any;
  gender: any;
  phone: any;
  img:any;

  admin: any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) { }

  //admin profile details
  adminShow() {		
    console.log('adminprofile');
    let adminid = localStorage.getItem("adminid");
     this.router.navigate(['adminprofile', adminid])    //send other page for this *****
  }

  ngOnInit() { // method calling
    this.showTableRowsInTable(); 
    this.showTableRowsInTable1(); 
    this.getAdminName();
  }
  
  //row count total holder no
  rowcount: Rowcount = new Rowcount();
  
  showTableRowsInTable() {
    this.stservice.getTableRows()
      .subscribe(response => {
        this.rowcount.rowCount = response.rowCount;
        });
  }

 //row count admin no
  row: Adminrow = new Adminrow();
 
  showTableRowsInTable1() {
    this.stservice.getTableRows1()
      .subscribe(response => {
        this.row.rowCount = response.rowCount;
        });
  }

  logOut(){
    localStorage.removeItem("email");
    this.router.navigate(['home']);
  }


  //admin name show in dashboard
  adm: Admin = new Admin();
  id1 : any = localStorage.getItem('adminid');
  getAdminName(){
    this.stservice.getadminById(this.id1).subscribe((data) =>{
      console.log(data);
      this.adm.id=data.id;
      this.adm.adminUsername=data.adminUsername;
      this.adm.img=data.img;
    })
  }


  chart: any;
	
  chartOptions = {
    title:{
      text: "Account Column Chart"  
    },
    animationEnabled: true,
    data: [{        
      type: "column",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 },
        { x: 60, y: 68 },
        { x: 70, y: 28 },
        { x: 80, y: 34 },
        { x: 90, y: 14 }
      ]
    }]
  }	

  }
