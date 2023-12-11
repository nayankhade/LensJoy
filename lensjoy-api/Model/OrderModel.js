import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    size: Number,
    color: String,
    forWhome: String,
});
  
export const Order = mongoose.model('Order', orderSchema);