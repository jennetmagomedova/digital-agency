import Section from "@/layouts/Section";
import "./Reviews.scss";
import { reviews } from "@/constants";
import ReviewCard from "@/components/ReviewCard";

const Reviews = () => {
  return (
    <Section
      title="What our Clients say About us"
      description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
      bg="about"
      className="reviews"
    >
      <ul className="grid--2cols__list">
        {reviews.map((review, index) => (
          <li className="grid--2cols__item" key={`review-${index}`}>
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Reviews;
