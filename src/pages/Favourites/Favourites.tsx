import React from 'react';
import { PropertyList } from '../../Components/PropertyList/PropertyList';
import './Favourites.css';

interface Props {
  properties: Properties[];
  manageFavouriteProperties: any;
}
export const Favourites: React.FC<Props> = ({
  properties,
  manageFavouriteProperties,
}) => {
  const onlyFavourites = properties.filter((prop) => prop.isFavorite === true);

  return (
    <div className="favourites">
      {onlyFavourites.length === 0 && (
        <p className="favourites__noFavourites"> You have no favorites.</p>
      )}

      <PropertyList
        properties={onlyFavourites}
        manageFavouriteProperties={manageFavouriteProperties}
      />
    </div>
  );
};
