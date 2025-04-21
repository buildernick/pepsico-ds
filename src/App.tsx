import { Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";
import FigmaImports from "./components/figma-imports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/figma-imports" element={<FigmaImports />} />
    </Routes>
  );
}

export default App;
