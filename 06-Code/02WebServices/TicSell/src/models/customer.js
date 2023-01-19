import {Schema, model} from "mongoose";
const customerSchema = new Schema({
    customer: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    birthday: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    phone: {type: Number, required: true},
},{versionKey: false});
export default model("customer", customerSchema, "customer");