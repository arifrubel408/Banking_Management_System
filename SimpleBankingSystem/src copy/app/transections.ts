export class Transections {
     t_id:any;
     t_account:any;
	 t_type:any;
	 t_amount:any;
     t_date:any;
	 t_notes:any;

     constructor(t_id:any, t_account:any, t_type:any, t_amount:any, t_date:any, t_notes:any){
        this.t_id=t_id;
        this.t_account=t_account;
        this.t_type=t_type;
        this.t_amount=t_amount;
        this.t_date=t_date;
        this.t_notes=t_notes;
     }
	
}
