import { BrowserRouter } from "react-router-dom";
import { Navbar, HeroSection } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </BrowserRouter>
  )
}

export default App
