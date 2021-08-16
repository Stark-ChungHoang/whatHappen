import React from 'react';
import { Route } from 'react-router';
import Home from './page/Home';
function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
