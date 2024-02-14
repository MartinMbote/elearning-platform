import React from 'react';
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection, Footer, AboutUs, MentorSection, Courses } from "../components";

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        {/* <TrustedCompanies /> */}
        <FunSection />
        <MentorSection />
        <Courses />
        <TopicSection />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default HomePage