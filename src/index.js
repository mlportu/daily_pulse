import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recover from './Pages/Recover';
import Fuel from './Pages/Fuel';
import Move from './Pages/Move';
import { ThemeProvider } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<ThemeProvider>
  <BrowserRouter>
          <Routes>
            <Route path="/" element ={<App/>}>
              <Route path="/move" element={<Move/>} />
              <Route path="/recover" element={<Recover/>} />
              <Route path="/fuel" element={<Fuel/>} />
            </Route> 
          </Routes>
      </BrowserRouter>
  //</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
