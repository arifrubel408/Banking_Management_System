export class ChangePin {
     accountNo?:any; 
     oldPin?:any;
     newPin?:any;

     constructor(  accountNo?:any, oldPin?:any, newPin?:any){
        this.accountNo=accountNo;
        this.oldPin=oldPin;
        this.newPin=newPin;
     }
}
