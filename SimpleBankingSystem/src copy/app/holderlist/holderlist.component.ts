import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-holderlist',
  templateUrl: './holderlist.component.html',
  styleUrls: ['./holderlist.component.css']
})
export class HolderlistComponent {

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
  
  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) {
    
  }
  viewBalance() {
    this.stservice.getHolderByAccountno(this.accountNo).subscribe(data => {
      this.name=data.name;
      this.accType = data.accType
      this.gender = data.gender
      this.address = data.address
      this.dob = data.dob
      this.religion = data.religion
      this.nationality = data.nationality
      this.mobile = data.mobile
      this.img= data.img
    });
  }

  // img:string="";
  // accountNo:number=0;
  // name:string="";
  // accType:string="";
  // address:number=0;
  // gender:string="";
  // dob:string="";
  // nationality:string="";
  // religion: string="";
  // mobile: string="";
  // secQuestion: string="";
  // secAns: string="";


  t:boolean=false;

  

  acchold:any=[
    {img:"./assets/card1.JPG", accountNo:101109, name:"Md.HAmid", accType:"Savings", gender:"male", address:"Dhaka", dob:"04/09/1995",  nationality:"Bangladeshi", religion:"Islam", mobile:"01673249843", secQuestion:"What is your Nick name?", secAns:"Samsu"},
    
  ]

  data(value:any){
    this.img=this.acchold[value].img
    this.accountNo=this.acchold[value].accountNo
    this.name=this.acchold[value].name
    this.accType=this.acchold[value].accType
    this.gender=this.acchold[value].gender
    this.address=this.acchold[value].address
    this.dob=this.acchold[value].dob
    this.nationality=this.acchold[value].nationality
    this.religion=this.acchold[value].religion
    this.mobile=this.acchold[value].mobile
    this.secQuestion=this.acchold[value].secQuestion
    this.secAns=this.acchold[value].secAns
  }

  pr:any;
  getholder(m:any){
    this.pr=m;

  }
}
