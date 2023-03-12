import { useEffect } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const trailer = document.getElementById("trailer");
    window.onmousemove = (e) => {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };

      trailer.animate(keyframes, {
        duration: 1200,
      });
    };
  }, []);
  return (
    <div className=" bg-gray-900 text-white">
      {/* <Router> */}
      <div
        id="trailer"
        className="w-3 h-3 bg-white rounded-full fixed top-0 left-0 z-50"
      ></div>
      <Navbar />

      {/* <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" category="general" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" category="sports" />}
          />
          <Route
            exact
            path="/anime"
            element={<News key="anime" category="anime" />}
          />
          <Route
            exact
            path="/technology"
            element={<News key="technology" category="technology" />}
          />
        </Routes> */}
      {/* </Router> */}
      <News />
    </div>
  );
}

export default App;
