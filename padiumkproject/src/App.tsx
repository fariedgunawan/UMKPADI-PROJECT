import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing";
import WithCatalog from "./Page/WithCatalog";
import CatalogLucu from "./Page/CatalogLucu";
import CatalogJahat from "./Page/CatalogJahat";
import MainBoard from "./Page/MainBoard";
import AddCatalog from "./Page/AddCatalog";
import AddCatalogList from "./Page/AddCatalogList";
import CatalogFinal from "./Page/CatalogFinal";
import Chat from "./Page/Chat";
import ShowCatalog from "./Page/ShowCatalog";
import ShowCart from "./Page/ShowCart";

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
        <Route path="/addcataloglist" element={<AddCatalogList />} />
        <Route path="/catalogfinal" element={<CatalogFinal />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/showcatalog" element={<ShowCatalog />} />
        <Route path="/showcart" element={<ShowCart />} />
      </Routes>
    </Router>
  );
}

export default App;
