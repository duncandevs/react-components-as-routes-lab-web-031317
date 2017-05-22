import React from 'react';

import NavBar from './NavBar';

const App = (props) => {
  return (
    <div>
    <div className="app">
        <NavBar />
        {props.children}
    </div>
    </div>
  );
};

export default App
