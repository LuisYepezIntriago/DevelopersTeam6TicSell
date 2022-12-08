import { Schema, model } from "mongoose";
const billSchema = new Schema(
  {
    customer: { type: String, required: true },
    adress: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    iva: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

export default model("bill", billSchema, "bill");
