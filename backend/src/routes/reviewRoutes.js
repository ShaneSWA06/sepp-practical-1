import express from 'express';
import { 
  createReview, 
  getProductReviews, 
  getUserReviews, 
  updateReview, 
  deleteReview 
} from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Review routes
router.post('/', protect, createReview);
router.get('/product/:productId', getProductReviews);
router.get('/user', protect, getUserReviews);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

export default router;