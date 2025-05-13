import { BillingReview } from '@/components/billing/model/types';

export interface ReviewsProps {
  billingReviewsData: BillingReview[];
}

export interface ReviewProps {
  review: BillingReview;
}

export interface RatingStarsProps {
  rating: number;
}
