import React from 'react';
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection, Footer, AboutUs } from "../components";

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        {/* <TrustedCompanies /> */}
        <FunSection />
        <TopicSection />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default HomePage