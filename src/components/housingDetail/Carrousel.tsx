import React, { useState } from "react";
import arrowLeft from "../../assets/location_detail/arrow_left.png";
import arrowRight from "../../assets/location_detail/arrow_right.png";

interface CarrouselProps {
  slides: string[];
}

const Carrousel: React.FC<CarrouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
          <img src={arrowLeft} alt="Previous" />
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <img src={arrowRight} alt="Next" />
        </p>
      )}
      {slides.map((image, index) => (
        <div
          key={index}
          className={index === current ? "slider active" : "slider"}
        >
          {index === current && (
            <img src={image} alt="img-appartement" className="slide__image" />
          )}
          {index === current && length > 1 && (
            <span className="slider__number">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;
;
