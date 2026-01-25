import Navbar from "./Components/Hero/Navbar";
import HomePage from "./Components/Hero/HomePage";
import Partners from "./Components/Partners/partners";
import Services from "./Components/Services/Services";
import LatestWork from "./Components/LatestWork/LatestWork";
import Team from "./Components/Team/Team";
import ContactUS from "./Components/ContactUS/ContactUS";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./Components/Contexts/Context";
import Final from "./Components/Final";

const App = () => {
  return (
    <ThemeProvider>
      {/* Navbar stays on all pages */}
      <Navbar />

      <Routes>
        {/* Home Page (your Final layout) */}
        <Route path="/" element={<Final />} />

        {/* Individual Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/latestwork" element={<LatestWork />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUS />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
