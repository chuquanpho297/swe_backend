const Review = require('../models/Review');


exports.getAllReviews = async () => {
  try {
    const reviews = await Review.find();
    return reviews;
  } catch (error) {
    throw new Error('Failed to get reviews');
  }
};


exports.createReview = async (productId, customerId, rating, comment) => {
  try {
    const review = new Review({
      productId,
      customerId,
      rating,
      comment,
    });

    await review.save();
    return review;
  } catch (error) {
    throw new Error('Failed to create review');
  }
};
