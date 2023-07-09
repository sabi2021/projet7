import React from "react";
import { Link } from "react-router-dom";
import housing from "../../../logements.json";
import Card from "./Cards";

interface Logement {
  id: number;
  cover: string;
  title: string;
}

const Gallery: React.FC = () => {
  return (
    <div className="home_gallery">
      {housing.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/housing/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
