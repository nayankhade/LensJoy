import mongoose, { Schema } from "mongoose";

const userLoginSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserLogin = mongoose.model("userLogin", userLoginSchema);
