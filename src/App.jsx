// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddBook from './components/AddBook'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path='/' className="App" element={<Home />}/>

    <Route path='/Add-book' element={<AddBook/>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
