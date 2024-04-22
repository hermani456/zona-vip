import { reviews } from "../utils";
import RatingsCard from "./RatingsCard";

const Ratings = () => {
  return (
    <section id="testimonios" className="max-w-screen-xl mx-auto p-5">
      <div className="text-text my-10 flex flex-col items-center">
        <h2 className="text-6xl font-bebasNeue text-primary">Testimonios</h2>
        <p className="font-light">Que opinan nuestros clientes</p>
      </div>
      <div className="grida">
        {reviews.map((review) => (
          <RatingsCard
            key={review.id}
            img={review.img}
            name={review.name}
            comment={review.comment}
          />
        ))}
      </div>
    </section>
  );
};

export default Ratings;
