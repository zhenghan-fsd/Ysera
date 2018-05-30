import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: { type: String },
  age: { type: Number }
});

export default mongoose.model("Author", authorSchema);
