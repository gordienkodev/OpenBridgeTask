import { ReviewProps } from "../model/types";
import { getStars } from "../utils/stars"; 

export const Review = ({ review }: ReviewProps) => {
  return (
    <div className="max-w-[400px] p-5 px-4 flex flex-col gap-[12px] border  border-[#FCFCFC] rounded-[15.6px] shadow-[0px_2px_4.7px_0px_rgba(1,22,14,0.1)] bg-[#FCFCFC]">
      <div className="flex items-center">
        {getStars(review.rating)}
      </div>
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg mt-2">{review.name}</div>
        <p className="text-sm text-gray-600">{review.location}</p>
      </div>
      <p className="text-base mt-1">{review.feedback}</p>
    </div>
  );
};
