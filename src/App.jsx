import { BrowserRouter } from "react-router-dom";
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HeroSection />
        <TrustedCompanies />
        <FunSection />
        <TopicSection />
      </div>
    </BrowserRouter>
  )
}

export default App
