export const Global = (err,req,res,next) => {
    console.log(err);
   switch(err.name){
    case "ValidationError":
        return res.status(400).json({ message: err.message }).send();
    case "NotfoundError":
        return res.status(400).json({ message: err.message }).send();
    default:
        return res.status(500).json({ message: err.message }).send();        
   }

} 