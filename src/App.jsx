import React from 'react';
import { HomePage, Instructors, HomePageSignedIn } from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/elearning-platform/' element={<HomePage />} />
        <Route path='/elearning-platform/HomePageSigned' element={<HomePageSignedIn />} />
      </Routes>
    </Router>
  )
}

export default App
