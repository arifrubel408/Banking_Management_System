import { Injectable } from '@angular/core';
import { Holder } from './holder';

import { HttpClient } from '@angular/common/http';
import { Userlogin } from './userlogin';
import { Observable } from 'rxjs';
import { Adminlogin } from './adminlogin';
import { Admin } from './admin';
import { Updatetransfer } from './updatetransfer';
import { Transections } from './transections';
import { ChangePin } from './change-pin';
import { AdminChangePin } from './admin-change-pin';

@Injectable({
  providedIn: 'root'
})
export class HolderService {

  private url = 'http://localhost:8080/';

  constructor(private client: HttpClient) { }

 
   // insert
   insertHolder(holder: Holder) {
    this.url = 'http://localhost:8080/save';
     return this.client.post(this.url, holder);
   }
 // transaction
 insertTransection(transections: Transections) {
  this.url = 'http://localhost:8080/teansactionsave';
   return this.client.post(this.url, transections);
 }

  // insert
  insertAdmin(admin: Admin) {
    this.url = 'http://localhost:8080/saveadmin';
     return this.client.post(this.url, admin);
   }

 // login
  loginCheck(userlogin: Userlogin): Observable<Userlogin> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Userlogin>(`${this.url}login`, userlogin);
  }

  // Adminlogin
  loginCheck1(adminlogin: Adminlogin): Observable<Admin> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Admin>(`${this.url}adminlogin`, adminlogin);
  }

  //show data
  ngOnInit(){
    this.url = 'http://localhost:8080/all';
  }
  getHolders() {
    // console.log("111");
    
    this.url = 'http://localhost:8080/all';
    return this.client.get(this.url);
  }
// auto accountNo create
  getNewAccountNo() {
    this.url = 'http://localhost:8080/holder/new';
    return this.client.get(this.url);
  }
// auto create id
  getNewAdminId() {
    this.url = 'http://localhost:8080/admin/new';
    return this.client.get(this.url);
  }

  getHolderByAccountno(accountNo: number): Observable<Holder>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Holder>(`${this.url}holder/${accountNo}`)
  }
//transection by AccountNO
  transectionByAccountno(): Observable<Transections>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Transections>(`${this.url}transaction`)
  }


  transection(fromDate: string, toDate: string): Observable<Transections>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Transections>(`${this.url}transaction/${fromDate}/${toDate}`)
  }
  //user transection
  userTransection(fromDate: string, toDate: string, t_account:any): Observable<Transections>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Transections>(`${this.url}user-transaction/${fromDate}/${toDate}/${t_account}`)
  }

  getadminById(id: number): Observable<Admin>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Admin>(`${this.url}adminlogin/${id}`)
  }
  //userprofile / show all data
  getholderByAccountno1(accountNo: number): Observable<Holder>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Holder>(`${this.url}holderlogin/${accountNo}`)
  }
//transaction
  gettransectionByAccountno(accountNo: number): Observable<Transections>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Transections>(`${this.url}transection/${accountNo}`)
  }

//update data
updateHolder(holder: Holder) {
  this.url = 'http://localhost:8080/update';
  // console.log(holder);
  return this.client.post(this.url, holder);
}

//change passowrd holder
changePassword(pin: ChangePin) {
  this.url = 'http://localhost:8080/password';
  // console.log(holder);
  return this.client.post(this.url, pin);
}

//change passowrd admin
changePassword1(pin: AdminChangePin) {
  this.url = 'http://localhost:8080/admin-password';
  // console.log(holder);
  return this.client.post(this.url, pin);
}

//update status
updateHolderStatus(holder: Holder) {
  this.url = 'http://localhost:8080/status';
  // console.log(holder);
  
  return this.client.post(this.url, holder);
}

updateTransfer(holder: Updatetransfer) {
  this.url = 'http://localhost:8080/updatetransfer';
  return this.client.post(this.url, holder);
}

//delete data
deleteHolder(holder: Holder) {
  this.url = 'http://localhost:8080/delete';
  return this.client.post(this.url, holder);
}
//rowcount
getTableRows(){
  this.url = 'http://localhost:8080/rowcount';
  return this.client.get<any>(this.url);
}
//Table rows count
getTableRows1(){
  this.url = 'http://localhost:8080/row-count';
  return this.client.get<any>(this.url);
}


userTransectionpdf(fromDate: string, toDate: string, t_account:any): Observable<Transections>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Transections>(`${this.url}reports/${fromDate}/${toDate}/${t_account}`)
}
}
