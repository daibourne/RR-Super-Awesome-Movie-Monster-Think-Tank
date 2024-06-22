import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs'
import Packages from './components/Packages'
import React, { Suspense } from 'react'

const AboutUs = React.lazy(() => improt('./AboutUs'))
const Packages = React.lazy(() => import('./Packages'))

function App() {
  const AboutUs = React.lazy(() => improt('./AboutUs'))
  const Packages = React.lazy(() => import('./Packages'))

  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
          <Suspense>
            <AboutUs />
            <Packages />
          </Suspense>
      </div>
    </div>
  );
}



export default App;
