import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true

    },
    image:{
        type:String,
        required:true

    },
  
    name: {
        type:String,
        required:true

    },
    price:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true

    },
      
  });


const Product = mongoose.model("Product",productSchema);
export default Product;  