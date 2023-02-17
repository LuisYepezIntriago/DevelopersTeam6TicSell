import express from "express";
import stoveRouter from "./routes/stove.route";

import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to API");
});
app.use("/api/stoves", stoveRouter);
export default app;