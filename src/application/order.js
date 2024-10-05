import { createOrderDto } from "./dto/order.js";
import OrderModel from "./database/Schemas/order.js";




export const getOrders = async(req,res) => {
   
   if(req.query.userId){
      const userId = req.query.userId;
      const filterOrders = await OrderModel.find({userId:userId});
      return res.status(200).json(filterOrders); 
   }

   const order = await OrderModel.find();
   return res.status(200).json(order);
  
}


export const createOrder = async(req,res) => {
 
   const orderbody = createOrderDto.safeParse(req.body);
   if(!orderbody.success){
      res.status(404).json({massage:`Order can not create`});
   }
   await OrderModel.create({
      orderProducts:orderbody.data.orderProducts,
     
   })

   return res.status(201).send();
  

 
   
  

 
   
};

export const getByOrderByUser = async(req,res)=>{
   // const orderId = req.params.userId;
   const userId = req.params.userid;
   const Order = await OrderModel.find({userId:userId}).populate({
      path:"orderProducts.productId",
      model:"Product",
   });
   

   return res.status(200).json(Order).send()
}