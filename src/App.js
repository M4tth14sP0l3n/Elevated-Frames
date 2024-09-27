import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CameraLegacyPage from './Pages/Camera';
import MatthiasPolenPage from './Pages/LandingPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/camera-legacy" element={<CameraLegacyPage />} /> 
        <Route path="/" element={<MatthiasPolenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
