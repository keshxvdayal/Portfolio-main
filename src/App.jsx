import React from 'react';
import './App.css';
import Services from './components/Services/services.jsx'
import Home from './components/home/Home.jsx';

import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";


function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
    multiplier: 3,
  }

  
  return (
    <LocomotiveScrollProvider
      options={options}
      containerRef={ref}
    >
      <main className='main' data-scroll-container ref={ref}>
        <Home/>
        <Services/>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
