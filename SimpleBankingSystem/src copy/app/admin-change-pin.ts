export class AdminChangePin {
    id?:any; 
     oldPassword?:any;
     newPassword?:any;

     constructor(  id?:any, oldPassword?:any, newPassword?:any){
        this.id=id;
        this.oldPassword=oldPassword;
        this.newPassword=newPassword;
     }
}
