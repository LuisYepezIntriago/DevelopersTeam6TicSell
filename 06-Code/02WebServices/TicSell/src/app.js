import express from "express";
import itemRouter from "./routes/item.route";
import billRouter from "./routes/bill.route";
import customerRouter from "./routes/customer.route";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to Team 6 API");
});
app.use("/api/items", itemRouter);
app.use("/api/bills", billRouter);
app.use("/api/customers", customerRouter);
export default app;