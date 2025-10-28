import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface ReviewFormProps {
  productId: string;
  onReviewSubmitted: () => void;
}

export const ReviewForm = ({ productId, onReviewSubmitted }: ReviewFormProps) => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user, token } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !token) {
      setError('You must be logged in to submit a review');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          productId,
          rating,
          comment
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit review');
      }

      // Reset form
      setRating(5);
      setComment('');
      
      // Notify parent component
      onReviewSubmitted();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Write a Review</h3>
      
      {!user && (
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md mb-4">
          <p className="text-yellow-800 dark:text-yellow-200">
            Please <a href="/login" className="underline font-medium">login</a> to submit a review.
          </p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-md mb-4">
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Rating</label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="text-2xl focus:outline-none"
              >
                <span className={star <= rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}>
                  ★
                </span>
              </button>
            ))}
            <span className="ml-2 text-gray-700 dark:text-gray-300">({rating}/5)</span>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 dark:text-gray-300 mb-2">
            Your Review
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={4}
            required
            disabled={!user || isSubmitting}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={!user || isSubmitting}
          className={`px-4 py-2 rounded-md text-white ${
            !user || isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};