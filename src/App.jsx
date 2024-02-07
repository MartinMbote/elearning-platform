import { BrowserRouter } from "react-router-dom";
import { Navbar, HeroSection, TrustedCompanies } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HeroSection />
        <TrustedCompanies />
      </div>
    </BrowserRouter>
  )
}

export default App
