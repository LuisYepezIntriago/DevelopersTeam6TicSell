import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const billSchema = new Schema(
  {
    customer: { type: Number, required: true, uniqueValidator: true},    
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
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

billSchema.plugin(uniqueValidator);
export default model("bill", billSchema, "bill");