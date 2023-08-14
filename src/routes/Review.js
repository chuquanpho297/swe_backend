const express = require('express');

const review = require("../controllers/Review");
const router = express.Router();

router.get('/', review.getAllReviews);


router.post('/', review.createReview);

module.exports = router;
