import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { Provider } from 'react-redux';
import GraphComponent from './GraphComponent';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GraphComponent />
      </div>
    </Provider>
  );
}

export default App;
