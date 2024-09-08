import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing";
import WithCatalog from "./Page/WithCatalog";
import CatalogLucu from "./Page/CatalogLucu";
import CatalogJahat from "./Page/CatalogJahat";
import MainBoard from "./Page/MainBoard";
import AddCatalog from "./Page/AddCatalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/withcatalog" element={<WithCatalog />} />
        <Route path="/cataloglucu" element={<CatalogLucu />} />
        <Route path="/catalogjahat" element={<CatalogJahat />} />
        <Route path="/mainboard" element={<MainBoard />} />
        <Route path="/addcatalog" element={<AddCatalog />} />
      </Routes>
    </Router>
  );
}

export default App;
