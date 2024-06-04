import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={farStar} />
      ))}
    </>
  );
};

export default StarRating;
