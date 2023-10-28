import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangepinComponent } from './changepin/changepin.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { DepositeComponent } from './deposite/deposite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TransectionComponent } from './transection/transection.component';
import { TransferComponent } from './transfer/transfer.component';
import { ViewbalanceComponent } from './viewbalance/viewbalance.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { InsertComponent } from './insert/insert.component';
import { ShowpageComponent } from './showpage/showpage.component';
import { UpdateComponent } from './update/update.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DepositshowComponent } from './depositshow/depositshow.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"operations",component:ProfileComponent},
  {path:"contact",component:ContactComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"deposite",component:DepositeComponent},
  {path:"withdrawal",component:WithdrawalComponent},
  {path:"transfer",component:TransferComponent},
  {path:"viewbalance",component:ViewbalanceComponent},
  {path:"transection",component:TransectionComponent},
  {path:"customerlist",component:CustomerlistComponent},
  {path:"changepin",component:ChangepinComponent},
  {path:"insert",component:InsertComponent},
  {path:"showpage",component:ShowpageComponent},
  {path:"update/:accountNo",component:UpdateComponent},
  {path:"deposite/:accountNo",component:DepositshowComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"adminlogin",component:AdminloginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

