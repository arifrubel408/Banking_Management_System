import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangepinComponent } from './changepin/changepin.component';
import { ContactComponent } from './contact/contact.component';
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


import { InsertadminComponent } from './insertadmin/insertadmin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { HolderlistComponent } from './holderlist/holderlist.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminchangepinComponent } from './adminchangepin/adminchangepin.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"operations",component:ProfileComponent},
  {path:"contact",component:ContactComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"holderlist",component:HolderlistComponent},
  {path:"deposite",component:DepositeComponent},
  {path:"withdrawal",component:WithdrawalComponent},
  {path:"transfer",component:TransferComponent},
  // {path:"viewbalance/:accountNo",component:ViewbalanceComponent},
  {path:"viewbalance",component:ViewbalanceComponent},
  {path:"transection",component:TransectionComponent},
  {path:"changepin",component:ChangepinComponent},
  {path:"insert",component:InsertComponent},
  {path:"showpage",component:ShowpageComponent},
  {path:"update/:accountNo",component:UpdateComponent},
  {path:"deposite/:accountNo",component:DepositeComponent},
  {path:"withdrawal/:accountNo",component:WithdrawalComponent},
  {path:"transfer/:accountNo",component:TransferComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"insertadmin",component:InsertadminComponent},
  {path:"adminprofile/:id",component:AdminprofileComponent},
  {path:"user-dashboard",component:UserdashboardComponent},
  {path:"userprofile/:id",component:UserprofileComponent},
  {path:"admin-password",component:AdminchangepinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

