import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    imageUrl: String,
    title: String,
    size: String,
    price : String
});

export const products = mongoose.model("products", productSchema);
