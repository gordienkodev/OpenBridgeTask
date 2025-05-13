import { BillingReview } from "@/components/billing/model/types";

export interface ReviewsProps {
    billingReviewsData: BillingReview[]
}

export interface ReviewProps {
    review: BillingReview;
}
