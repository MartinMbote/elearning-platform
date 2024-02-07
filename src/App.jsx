import { BrowserRouter } from "react-router-dom";
import { Navbar, HeroSection, TrustedCompanies, FunSection } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HeroSection />
        <TrustedCompanies />
        <FunSection />
      </div>
    </BrowserRouter>
  )
}

export default App
