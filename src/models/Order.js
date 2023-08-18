const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderLine: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      includedTopping: [
        {
          toppingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topping",
          },
        },
      ],
      size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
      },
      quantity: {
        type: Number,
        default: 1,
      },
      subTotal: {
        type: Number,
      },
    },
  ],
  discount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "successed", "cancelled"],
    default: "pending",
  },
  shippingMethod: {
    type: String,
    enum: ["Delivery", "Pick up"],
    default: "Pick up",
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  // delivery: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Delivery",
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
