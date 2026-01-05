class ApiError extends Error {

    constructor(
    statusCode,
    message="Something went wrong",
     errors=[],
     statck=""
    ){

        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data=null;
        this.success=false;
        this.error= this.error;
        if
            (stack){
            this.stack=stack;
            } else {  
                Error.captureStackTrace(this,this.constructor);
            }  

    }
}
export default ApiError;