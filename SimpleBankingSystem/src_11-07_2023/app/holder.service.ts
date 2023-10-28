import { Injectable } from '@angular/core';
import { Holder } from './holder';

import { HttpClient } from '@angular/common/http';
import { Userlogin } from './userlogin';
import { Observable } from 'rxjs';
import { Adminlogin } from './adminlogin';

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
 // login
  loginCheck(userlogin: Userlogin): Observable<Userlogin> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Userlogin>(`${this.url}login`, userlogin);
  }

  // Adminlogin
  loginCheck1(adminlogin: Adminlogin): Observable<Adminlogin> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Adminlogin>(`${this.url}adminlogin`, adminlogin);
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

  getHolderByAccountno(accountNo: number): Observable<Holder>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Holder>(`${this.url}holder/${accountNo}`)
  }

//update data
updateHolder(holder: Holder) {
  this.url = 'http://localhost:8080/update';
  // console.log(holder);
  
  return this.client.post(this.url, holder);
}

//delete data
deleteHolder(holder: Holder) {
  this.url = 'http://localhost:8080/delete';
  return this.client.post(this.url, holder);
}

}
