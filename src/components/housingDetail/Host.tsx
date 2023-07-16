import React from 'react';

interface HostProps {
  name: string;
  picture: string;
}

const Host: React.FC<HostProps> = (props) => {
  return (
    <>
      <span className="nom-proprietaire">{props.name}</span>
      <img
        className="photo-proprietaire"
        src={props.picture}
        alt="Propriétaire"
      />
    </>
  );
}

export default Host;
