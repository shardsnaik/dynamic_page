import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from '../src/components/Pages/Page1/Page1';
import Page2 from '../src/components/Pages/Page2/Page2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Page1' element={<Page1 />} />
      <Route path='/Page2' element={<Page2 />} />
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
