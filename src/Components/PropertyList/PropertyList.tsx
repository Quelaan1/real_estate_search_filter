import React from 'react';
import './PropertyList.css';
import { PropertyCard } from '../PropertyCard/PropertyCard';

interface Props {
  properties: Properties[];
  manageFavouriteProperties: any;
}

export const PropertyList: React.FC<Props> = ({
  properties,
  manageFavouriteProperties,
}) => {
  return (
    <div className="property_list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          manageFavouriteProperties={manageFavouriteProperties}
        />
      ))}
    </div>
  );
};
