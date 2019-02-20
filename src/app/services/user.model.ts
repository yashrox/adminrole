export class DETAILS {
        
        public  date ;
        public  mark ;
        public url ;
        
    constructor(public name , public email ,public address  , public gender , public user){
        
        this.name = name ;
        this.email = email ;
        this.address = address;
        this.gender = gender ;
        this.user  = user ;
        this.mark = false ;
        this.url  = null ;
         this.date = new Date().toString()
                
    }    
}