import {z} from "zod";

export const createOrderDto = z.object({
    orderProducts:z.object({
        productId:z.string(),
        quantity:z.number()
    })
    .array(),
})