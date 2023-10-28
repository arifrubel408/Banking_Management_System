import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { OperationsComponent } from './operations/operations.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositeComponent } from './deposite/deposite.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { TransferComponent } from './transfer/transfer.component';
import { ViewbalanceComponent } from './viewbalance/viewbalance.component';
import { TransectionComponent } from './transection/transection.component';
import { ChangepinComponent } from './changepin/changepin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { InsertComponent } from './insert/insert.component';
import { ShowpageComponent } from './showpage/showpage.component';
import { UpdateComponent } from './update/update.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { InsertadminComponent } from './insertadmin/insertadmin.component';
import { HolderlistComponent } from './holderlist/holderlist.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AdminchangepinComponent } from './adminchangepin/adminchangepin.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    OperationsComponent,
    ProfileComponent,
    DepositeComponent,
    WithdrawalComponent,
    TransferComponent,
    ViewbalanceComponent,
    TransectionComponent,
    ChangepinComponent,
    LoginComponent,
    InsertComponent,
    ShowpageComponent,
    UpdateComponent,
    AdminloginComponent,
    DashboardComponent,
    AdminprofileComponent,
    InsertadminComponent,
    HolderlistComponent,
    UserdashboardComponent,
    UserprofileComponent,
    AdminchangepinComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CanvasJSAngularChartsModule,
    
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
