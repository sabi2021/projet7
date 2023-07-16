import React from 'react';
import fullStar from "../../assets/location_detail/etoile_vide.png";
import emptyStar from "../../assets/location_detail/etoile_remplie.png";

interface RateProps {
  score: string;
}

const Rate: React.FC<RateProps> = (props) => {
  const score = parseInt(props.score, 10);
  const notes = [1, 2, 3, 4, 5];

  return (
    <div className="rate-contenair">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={emptyStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={fullStar}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;
