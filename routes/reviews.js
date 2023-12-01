const express = require('express');
const router = express.Router({ mergeParams: true }); //req params is diff for router(reviews) so we need to merge so we get id from campground
const catchAsync = require('../utils/catchAsync')
// const campgrounds = require('./routes/campgrounds.js')
const Review = require('../models/review');
// const Campground = require('../models/campground');
const ExpressError = require('../utils/ExpressError');
const { reviewSchema } = require('../schemas.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const reviews = require('../controllers/reviews.js');





router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))



module.exports = router;