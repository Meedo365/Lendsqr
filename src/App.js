import React from 'react';
import './index.css';
import StoreContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <StoreContext>
      <Router>
        <Routes>
          {/* <Route path='/' element={< />} /> */}
        </Routes>
      </Router>
    </StoreContext>
  );
}

export default App;
