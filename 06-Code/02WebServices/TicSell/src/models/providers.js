import { Schema, model } from "mongoose";
const providerSchema = new Schema({
  RUC: { type: String, required: true },
  ProviderName: { type: String, required: true },
  Address: { type: String, required: true },
  Phone: { type: String, required: true },
  SellerName: { type: String, required: true }
},{versionKey: false});
export default model("providers", providerSchema, "providers");