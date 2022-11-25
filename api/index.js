import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./db.js";
import routerProduct from "./src/routes/products.routes.js";
import routerUsers from "./src/routes/users.routes.js";
import routerCategory from "./src/routes/category.routes.js";
import routerShopingCar from "./src/routes/shopingCar.routes.js";
import routerAuth from "./src/routes/auth.routes.js"
import routerRoles from "./src/routes/roles.routes.js"
import routerOrders from "./src/routes/orders.routes.js"
import routerPayment from "./src/routes/payment.routes.js"
import routerReview from './src/routes/review.routes.js'
import { PORT, FRONT_DOMINIO } from "./config.js";

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONT_DOMINIO); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/api", routerAuth);
app.use("/api", routerRoles);
app.use("/api", routerProduct);
app.use("/api", routerUsers);
app.use("/api", routerCategory);
app.use("/api", routerShopingCar);
app.use("/api", routerOrders);
app.use("/api", routerPayment);
app.use("/api", routerReview);

app.listen(PORT, () => {
  console.log(`% listening at ${PORT}`);
});
