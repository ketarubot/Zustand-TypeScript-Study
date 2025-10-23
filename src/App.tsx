import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import WholeBookList from "./pages/WholeBookList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/list" element={<WholeBookList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
