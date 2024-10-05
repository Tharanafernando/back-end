import mongoose from "mongoose";

export const connectionDB = async() => {
    try{
        const connectionString = "mongodb+srv://tharana611:Tharana141FDO@cluster0.8q4lqof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        await mongoose.connect(connectionString);
        console.log("Database connected successfully")
        
    }catch(error){
        console.log(error)
        console.log("Connection failed")
    }
}

