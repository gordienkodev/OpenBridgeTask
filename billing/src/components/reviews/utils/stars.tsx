import { FullStarIcon } from "@/components/icons/FullStarIcon";
import { HalfStarIcon } from "@/components/icons/HalfStarIcon";
import { EmptyStarIcon } from "@/components/icons/EmptyStarIcon";

export const getStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FullStarIcon key={`full-${i}`} />);
  }

  if (hasHalfStar) {
    stars.push(<HalfStarIcon key="half" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<EmptyStarIcon key={`empty-${i}`} />);
  }

  return stars;
};
