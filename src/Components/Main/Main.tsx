import React, { useState } from 'react';
import './Main.css';
import { PropertyList } from '../PropertyList/PropertyList';
import { Filter } from '../Filter/Filter';

interface Props {
  properties: Properties[];
}

export const Main: React.FC<Props> = ({ properties }) => {
  const [filteredProperties, setFilteredProperties] = useState();

  const filterProperties = (input: any) => {
    setFilteredProperties(() => input);
    console.log(filteredProperties);
  };

  return (
    <div className="main">
      <div className="main__header">
        <h1 className="main__heading">Search properties to rent</h1>
        <div className="main__search-option">
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
        properties={filteredProperties ? filteredProperties : properties}
      />
    </div>
  );
};
