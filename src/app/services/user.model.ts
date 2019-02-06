export class DETAILS {
        
        public  date
            
    constructor(public name , public email ,public address  , public gender , public user){
        
        this.name = name ;
        this.email = email ;
        this.address = address;
        this.gender = gender ;
        this.user  = user ;
         this.date = new Date().toString()
        
    }    
}