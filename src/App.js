

import './App.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
