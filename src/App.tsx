import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <main>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/:id' element={<DetailPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <MyFooter />
    </div>
  );
}

export default App;
