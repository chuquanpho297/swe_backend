const Cart = require('../models/Cart');


exports.getCartByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateCartByUserId = async (req, res) => {
  const { userId } = req.params;
  const { products } = req.body;

  try {
    const cart = await Cart.findOneAndUpdate({ userId }, { products }, { new: true });
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
