import { Schema, model } from "mongoose";
const itemSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
},{versionKey: false});
export default model("items", itemSchema, "items");