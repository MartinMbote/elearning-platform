import { BrowserRouter } from "react-router-dom";
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection, Footer, AboutUs } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HeroSection />
        <TrustedCompanies />
        <FunSection />
        <TopicSection />
        <AboutUs />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
