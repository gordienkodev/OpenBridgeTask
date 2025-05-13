import { ReviewsProps } from "../model/types";


export const Reviews = ({ billingReviewsData }: ReviewsProps) => {
  return (
    <>
      {billingReviewsData.map((review, index) => (
        <div key={index} className="review">
          <h3>{review.name}</h3>
          <p>{review.location}</p>
          <p>{review.feedback}</p>
        </div>
      ))}
    </>
  );
};


