import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// @desc    Create a new review
// @route   POST /api/reviews
// @access  Private
export const createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const userId = req.user.id;

    // Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if user already reviewed this product
    const existingReview = await prisma.review.findFirst({
      where: {
        userId,
        productId
      }
    });

    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this product' });
    }

    // Create review
    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        user: { connect: { id: userId } },
        product: { connect: { id: productId } }
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        }
      }
    });

    // Update product rating
    const reviews = await prisma.review.findMany({
      where: { productId }
    });

    const ratingCount = reviews.length;
    const ratingAverage = reviews.reduce((acc, item) => acc + item.rating, 0) / ratingCount;

    await prisma.product.update({
      where: { id: productId },
      data: {
        ratingCount,
        ratingAverage
      }
    });

    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all reviews for a product
// @route   GET /api/reviews/product/:productId
// @access  Public
export const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await prisma.review.findMany({
      where: { productId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all reviews by a user
// @route   GET /api/reviews/user
// @access  Private
export const getUserReviews = async (req, res) => {
  try {
    const userId = req.user.id;

    const reviews = await prisma.review.findMany({
      where: { userId },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            images: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.id;

    // Check if review exists and belongs to user
    const existingReview = await prisma.review.findUnique({
      where: { id }
    });

    if (!existingReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (existingReview.userId !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this review' });
    }

    // Update review
    const review = await prisma.review.update({
      where: { id },
      data: {
        rating,
        comment
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        }
      }
    });

    // Update product rating
    const productId = existingReview.productId;
    const reviews = await prisma.review.findMany({
      where: { productId }
    });

    const ratingCount = reviews.length;
    const ratingAverage = reviews.reduce((acc, item) => acc + item.rating, 0) / ratingCount;

    await prisma.product.update({
      where: { id: productId },
      data: {
        ratingCount,
        ratingAverage
      }
    });

    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Check if review exists and belongs to user
    const existingReview = await prisma.review.findUnique({
      where: { id }
    });

    if (!existingReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (existingReview.userId !== userId && req.user.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Not authorized to delete this review' });
    }

    const productId = existingReview.productId;

    // Delete review
    await prisma.review.delete({
      where: { id }
    });

    // Update product rating
    const reviews = await prisma.review.findMany({
      where: { productId }
    });

    const ratingCount = reviews.length;
    const ratingAverage = ratingCount > 0 
      ? reviews.reduce((acc, item) => acc + item.rating, 0) / ratingCount 
      : 0;

    await prisma.product.update({
      where: { id: productId },
      data: {
        ratingCount,
        ratingAverage
      }
    });

    res.json({ message: 'Review removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};