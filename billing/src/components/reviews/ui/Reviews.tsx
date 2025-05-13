import { ReviewsProps } from "../model/types";
import { Review } from "./Review";

export const Reviews = ({ billingReviewsData }: ReviewsProps) => {
  const leftColumn = billingReviewsData.filter((_, index) => index % 3 === 0);
  const centerColumn = billingReviewsData.filter((_, index) => index % 3 === 1);
  const rightColumn = billingReviewsData.filter((_, index) => index % 3 === 2);

  return (
    <div className="relative h-[750px] overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-white to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white to-transparent z-10" />

      <div className="flex justify-between gap-5 relative -mt-[50px] -mb-[50px]">
        <div className="flex-1">
          {leftColumn.map((review, index) => (
            <div key={index} className="mb-5">
              <Review review={review} />
            </div>
          ))}
        </div>

        <div className="flex-1 mt-20">
          {centerColumn.map((review, index) => (
            <div key={index} className="mb-5">
              <Review review={review} />
            </div>
          ))}
        </div>

        <div className="flex-1">
          {rightColumn.map((review, index) => (
            <div key={index} className="mb-5">
              <Review review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
