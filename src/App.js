import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import DashBoard from './pages/dashbord';

function App() {
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </Router>
    </StoreContext>
  );
}

export default App;
