"use strict";

import express from "express";
import productsRouter from "./api/products.js";
import categoriesRouter from "./api/categories.js";
import Ordrerouter from "./api/order.js";
import { connectionDB } from "./application/database/db.js";
import { Global } from "./global-error-handler/Global.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/order" , Ordrerouter);

app.use(Global);


const PORT = 8000;
connectionDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
