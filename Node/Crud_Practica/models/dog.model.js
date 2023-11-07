const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    breed: { type: String, required: false, trim: true },
    age: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Dog = mongoose.model("dog", DogSchema);

module.exports = Dog;
