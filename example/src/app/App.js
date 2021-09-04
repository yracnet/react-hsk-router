import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ItemRender } from 'react-hsk-router';
import { route } from './index';

const App = () => {
  const random = Math.random();
  return (
    <Router>
      <b>{random}</b>
      <ItemRender value={route} />
    </Router>
  );
};

export default App;
