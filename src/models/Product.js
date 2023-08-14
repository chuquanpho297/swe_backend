const { mongoose } = require("mongoose");
// const Variation = require("./variation/Size");
const Category = require("./variation/Category");
const Topping = require("./variation/Topping");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  description: {
    type: String,
  },
  basePrice: {
    type: Number,
    required: true,
    max: 999999,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: [
    {
      title: {
        type: mongoose.Schema.Types.String,
        ref: "Category",
      },
    },
  ],
  // variations: [Variation.schema],
  sizeList: [
    {
      sizeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
      },
    },
  ],
  toppingList: [
    {
      toppingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    },
  ],
  image: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
