import express from "express";
import itemRouter from "./routes/item.route";
import customerRouter from "./routes/customer.route";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Team 6 API");
});
app.use("/api/items", itemRouter);
app.use("/api/customers", customerRouter);
export default app;
