import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Notfound } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
