import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Globalstats from './components/Globalstats';
import Countrystats from './components/Countrystats';

function App() {
  return (
    <div>
      <Navbar />
      <Globalstats />
      <Countrystats />
    </div>
  );
}

export default App;
