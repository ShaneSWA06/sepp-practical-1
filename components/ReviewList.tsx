import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  avatar?: string;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: User;
}

interface ReviewListProps {
  productId: string;
  refreshTrigger?: number;
}

export const ReviewList = ({ productId, refreshTrigger = 0 }: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews/product/${productId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        setReviews(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId, refreshTrigger]);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 dark:bg-red-900 p-4 rounded-md my-4">
        <p className="text-red-800 dark:text-red-200">Error: {error}</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center my-4">
        <p className="text-gray-600 dark:text-gray-300">No reviews yet. Be the first to review this product!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Customer Reviews ({reviews.length})</h3>
      
      {reviews.map((review) => (
        <div key={review.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mr-3">
              {review.user.avatar ? (
                <img 
                  src={review.user.avatar} 
                  alt={review.user.name} 
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                  {review.user.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <h4 className="font-medium dark:text-white">{review.user.name}</h4>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={star <= review.rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};