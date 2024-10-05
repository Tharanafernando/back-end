import express from "express"

import{
    createOrder,
    getByOrderByUser
}from "../application/order.js";




const Ordrerouter = express.Router();

Ordrerouter.route("/").post(createOrder);
Ordrerouter.route("/:id").get(getByOrderByUser)



export default Ordrerouter;