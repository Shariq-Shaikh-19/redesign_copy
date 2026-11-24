import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import About from "./components/Home/about";
import Brand from "./components/Home/brand";
import Ecomagix from "./components/Home/Ecomagix";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/navbar" element={<Navbar/>} />
            <Route path="/about" element={<About />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/ecomagix" element={<Ecomagix />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
