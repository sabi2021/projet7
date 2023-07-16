import React from "react";

interface TagProps {
  nom: string;
}

const Tag: React.FC<TagProps> = ({ nom }) => {
  return (
    <div className="tag-container">
      <span className="tag-container__button">{nom}</span>
    </div>
  );
};

export default Tag;
