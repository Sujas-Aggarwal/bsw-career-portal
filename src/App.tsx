import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ExplorePage from "./pages/Explore";
import Build from "./pages/Build";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="h-[50px] md:h-[70px]"></div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore/:profileName" element={<ExplorePage />} />
        <Route path="/build/:profileName" element={<Build />} />
        <Route path="/resources/:profileName" element={<Resources />} />
      </Routes>
    </Router>
  );
}
