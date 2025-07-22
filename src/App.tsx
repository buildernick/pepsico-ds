import { Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";
import FigmaImports from "./components/figma-imports";
import Catalog from "./pages/Catalog";
import PepsiAdmin from "./pages/PepsiAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/figma-imports" element={<FigmaImports />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/pepsi-admin" element={<PepsiAdmin />} />
    </Routes>
  );
}

export default App;
