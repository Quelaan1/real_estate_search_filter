import React, { useState } from 'react';
import './Rent.css';
import { PropertyList } from '../../Components/PropertyList/PropertyList';
import { Filter } from '../../Components/Filter/Filter';

interface Props {
  properties: Properties[];
  manageFavouriteProperties: any;
}

export const Rent: React.FC<Props> = ({
  properties,
  manageFavouriteProperties,
}) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const filterProperties = (input: any) => {
    setFilteredProperties(() => input);
  };

  return (
    <div className="rent">
      <div className="rent__header">
        <h1 className="rent__heading">Search properties to rent</h1>
        <div className="box">
          <select>
            <option value="0">Search with Search Bar</option>
            <option value="1">Search</option>
          </select>
        </div>
      </div>

      <Filter
        properties={properties}
        filterProperties={filterProperties}
      />

      <PropertyList
        properties={filteredProperties}
        manageFavouriteProperties={manageFavouriteProperties}
      />
    </div >
  );
};
