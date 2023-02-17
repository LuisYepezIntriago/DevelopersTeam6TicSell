import {Schema, model} from "mongoose";
const stoveSchema = new Schema({
    id: {type: String, required: true},
    description: {type: String, required: true},
    brand: {type: String, required: true},
},{versionKey: false});
export default model("stoves", stoveSchema, "stoves");