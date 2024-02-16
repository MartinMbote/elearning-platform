import React from 'react';
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection, Footer, AboutUs, MentorSection, Courses, DiscoverWhatsPossible, GetStarted } from "../components";

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        {/* <TrustedCompanies /> */}
        <FunSection />
        <MentorSection />
        {/* <DiscoverWhatsPossible /> */}
        <Courses />
        <GetStarted />
        <TopicSection />
        {/* <AboutUs /> */}
        <Footer />
    </div>
  )
}

export default HomePage