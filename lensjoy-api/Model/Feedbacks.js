import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({
  feedback: String,
});

export const Feedbacks = mongoose.model('Feedbacks', feedbackSchema);
