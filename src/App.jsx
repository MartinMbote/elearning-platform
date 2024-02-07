import { BrowserRouter } from "react-router-dom";
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HeroSection />
        <TrustedCompanies />
        <FunSection />
        <TopicSection />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
