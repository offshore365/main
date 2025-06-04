import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loader from "./Components/Loader.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ChatbotWidget from "./Components/ChatbotWidget.jsx"; // Add this import
import Architecture from "./Screens/Services/Architecture.jsx";
import Interior from "./Screens/Services/Interior.jsx";
import BIM from "./Screens/Services/BIM.jsx";
import Visulization from "./Screens/Services/3D.jsx";
import IT from "./Screens/Services/IT.jsx";
import Marketing from "./Screens/Services/Marketing.jsx";
import Admin from "./Screens/Services/Admin.jsx";
import Aboutus from "./Screens/Pages/Aboutus.jsx";
import Carrers from "./Screens/Pages/Carrers.jsx";
import Blogs from "./Screens/Pages/Blogs.jsx";
import Contact from "./Screens/Pages/Contactus.jsx";
import Home from "./Screens/Home.jsx";

// Debug component to log the current route
const DebugRoute = () => {
  const location = useLocation();
  console.log("Current route:", location.pathname);
  return null;
};

function App() {
  const PlaceholderPage = ({ title }) => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800">{title} Page</h1>
    </div>
  );

  return (
    <Router>
      <div>
        <Navbar />
        <DebugRoute /> {/* Log the current route */}
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/bim" element={<BIM />} />
          <Route path="/3dvisualization" element={<Visulization />} />
          <Route path="/it" element={<IT />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<Aboutus title="About Us" />} />
          <Route path="/careers" element={<Carrers title="Carrers" />} />
          <Route path="/contact" element={<Contact title="Contact" />} />
          <Route path="/blogs" element={<Blogs title="Blogs" />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800">
                  404 - Page Not Found
                </h1>
              </div>
            }
          />
        </Routes>
        <Footer />
        {/* Add ChatbotWidget here - it will appear on all pages */}
        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App;