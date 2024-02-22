import React from 'react';
import { HomePage, Instructors, HomePageSignedIn, CourseCurrent } from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/elearning-platform/' element={<HomePage />} />
        <Route path='/elearning-platform/HomePageSigned' element={<HomePageSignedIn />} />
        <Route path='/elearning-platform/ChosenCourse' element={<CourseCurrent />} />
      </Routes>
    </Router>
  )
}

export default App
