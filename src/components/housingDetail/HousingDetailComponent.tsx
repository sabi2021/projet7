import { useParams, Navigate } from "react-router-dom";
import housing from "../../../logements.json";

import Carrousel from "./Carrousel";

const HousingDetailComponent = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const housingDetail = housing.find((logement) => logement.id === id);

  return (
    <div>
        <Carrousel/>
    </div>
  );
};

export default HousingDetailComponent;