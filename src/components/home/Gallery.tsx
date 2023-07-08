import React from "react";
import { Link } from "react-router-dom";
import logements from "../../../logements.json";
import Card from "./cards";

interface Logement {
  id: number;
  cover: string;
  title: string;
}

const Gallery: React.FC = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
