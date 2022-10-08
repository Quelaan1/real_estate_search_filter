import React, { useEffect, useState } from 'react';
import './App.css';
import propertiesFromServer from './api/properties.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home/Home';
import { Rent } from './pages/Rent/Rent';
import { Buy } from './pages/Buy/Buy';
import { Sell } from './pages/Sell/Sell';
import { Manage } from './pages/ManageProperty/Manage';
import { Resources } from './pages/Resources/Resources';
import { Favourites } from './pages/Favourites/Favourites';

export const App: React.FC = () => {
  const [properties, setProperties] = useState(propertiesFromServer);
  let updated = false;

  const [changes, setChanges] = useState(0);

  useEffect(() => {}, [changes]);

  const manageFavouriteProperties = (input: any) => {
    setChanges((changes) => changes + 1);
    updated = !updated;
    properties.map((prop) => {
      if (prop.id === input) {
        prop.isFavorite = !prop.isFavorite;
      }
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            index
            path="rent"
            element={
              <Rent
                properties={properties}
                manageFavouriteProperties={manageFavouriteProperties}
              />
            }
          />
          <Route
            index
            path="buy"
            element={<Buy />}
          />
          <Route
            index
            path="sell"
            element={<Sell />}
          />
          <Route
            index
            path="manage"
            element={<Manage />}
          />
          <Route
            index
            path="resource"
            element={<Resources />}
          />
          <Route
            index
            path="favourites"
            element={
              <Favourites
                properties={properties}
                manageFavouriteProperties={manageFavouriteProperties}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
