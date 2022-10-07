import React, { useState } from 'react';
import './PropertyList.css';
import { PropertyCard } from '../PropertyCard/PropertyCard';

interface Props {
  properties: Properties[];
}

export const PropertyList: React.FC<Props> = ({ properties }) => {
  const [favourites, setFavourites] = useState();

  const addFavourites = (input: any) => {
    setFavourites(input);
    // console.log(input);
  };

  return (
    <div className="property_list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          addFavourites={addFavourites}
        />
      ))}
    </div>
  );
};
