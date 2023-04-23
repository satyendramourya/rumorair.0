import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Summary from "./components/Summary";

function App() {
  return (
    <div className=" bg-gray-900  text-white min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/summary/:url" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
