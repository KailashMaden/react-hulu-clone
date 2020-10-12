import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/results/Results';
import requests from './api/request'

import './App.css';


function App() {
  const [selectedOption, setSelectedOption] = useState('');
  
  useEffect(() => {
    if(selectedOption === ''){
      setSelectedOption(requests.fetchTrending);
    }
  }, [selectedOption])
  return (
    <div className="app">  
     <Header />
     <Nav setSelectedOption={setSelectedOption} />
     <Results selectedOption={selectedOption} />
    </div>
  );
}


export default App;
