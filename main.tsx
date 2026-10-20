import { HashRouter, Routes, Route } from 'react-router-dom'; // 👈 1. CHANGE THIS IMPORT
import { cn } from "./utils";
// ... import your other components/pages like Home, About, etc.

export default function App() {
  return (
    // 👈 2. WRAP YOUR SCENE WITH HASHROUTER INSTEAD OF BROWSERROUTER
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* If you have other page pathways, declare them like this: */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </HashRouter>
  );
}
