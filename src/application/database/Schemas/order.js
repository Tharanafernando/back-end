import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderProducts: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            //ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1,
          },
        },
      ],
      required: true,
    },
  });

const OrderModel = mongoose.model("Orders",OrderSchema);
export default OrderModel;  