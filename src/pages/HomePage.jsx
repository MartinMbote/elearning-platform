import React from 'react';
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection, Footer, AboutUs, MentorSection } from "../components";

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        {/* <TrustedCompanies /> */}
        <FunSection />
        <MentorSection />
        <TopicSection />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default HomePage