import { useParams, Navigate } from "react-router-dom";
import housing from "../../../logements.json";

import Carrousel from "./Carrousel";
import Tag from "./Tag";
import Host from "./Host";
import Rate from "./Rate";
import Accordion from "../accordion/Accordion";


const HousingDetailComponent = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const housingDetail = housing.find((logement) => logement.id === id);

  const tagsLogement = housingDetail?.tags.map((tags, i) => (
    <Tag key={i} nom={tags} />
  ));

  const equipements = housingDetail?.equipments.map((equipment, i) => (
    <ul key={i}>
      <li>{equipment}</li>
    </ul>
  ));

  return (
    <>
      {housingDetail ? (
        <div className="Fiche-container">
          <Carrousel slides={housingDetail?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{housingDetail?.title}</span>
                  <span className="endroit-logement">
                    {housingDetail?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={housingDetail?.host.name}
                    picture={housingDetail?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate score={housingDetail.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Accordion */}
          <div className="description-centent">
            <div className="description-centent__description">
              <Accordion
                title="Description"
                content={housingDetail?.description}
              />
            </div>
            <div className="description-centent__equipement">
              <Accordion title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default HousingDetailComponent;