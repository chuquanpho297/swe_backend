const Cart = require('../models/Cart');

// Get cart by user ID
exports.getCartByUserId = async (userId) => {
  try {
    const cart = await Cart.findOne({ userId });
    return cart;
  } catch (error) {
    throw new Error('Failed to get cart');
  }
};

// Update cart by user ID
exports.updateCartByUserId = async (userId, products) => {
  try {
    const cart = await Cart.findOneAndUpdate({ userId }, { products }, { new: true });
    return cart;
  } catch (error) {
    throw new Error('Failed to update cart');
  }
};
