export class ValidationError extends Error{
    constructor(massage){
        super(massage);
        this.name = "ValidationError";
        
    }
    

}


