export class Holder {

    accountNo?: any;
    micrNo?: any;
    pin?: any;
    email?:any;
    accType?: any;
    address?: any;
    gender?: any;
    iniBlance?: any;
    name?: any;
    dob?: any;
    nationality?: any;
    religion?: any;
    mobile?: any;
    secQuestion?: any;
    secAns?: any;
    img?:any;
    status?:any;

    constructor(accountNo?: any, micrNo?: any, pin?: any, email?:any, accType?: any, address?: any, gender?: any, 
        iniBlance?: any, name?: any, dob?: any, nationality?: any, religion?: any, mobile?: any, 
        secQuestion?: any, secAns?: any, img?: any, status?:any) {
        this.accountNo = accountNo;
        this.micrNo = micrNo;
        this.pin = pin;
        this.email=email;
        this.accType = accType;
        this.address = address;
        this.gender = gender;
        this.iniBlance = iniBlance;
        this.name = name;
        this.dob = dob;
        this.nationality = nationality;
        this.religion = religion;
        this.mobile = mobile;
        this.secQuestion = secQuestion;
        this.secAns = secAns;
        this.img = img;
        this.status= status;
    }
}
