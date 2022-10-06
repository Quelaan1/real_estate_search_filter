import React from 'react';
import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Main } from './Components/Main/Main';
import propertiesFromServer from './api/properties.json';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Main properties={propertiesFromServer} />
    </div>
  );
};

export default App;
