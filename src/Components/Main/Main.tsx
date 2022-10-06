import React from 'react';
import './Main.css';
import { Filter } from '../Filter/Filter';

interface Props {
  properties: Properties[];
}

export const Main: React.FC<Props> = ({ properties }) => {
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

      <Filter properties={properties} />
    </div>
  );
};
