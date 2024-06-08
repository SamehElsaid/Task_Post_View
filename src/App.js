import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Layout/Header/Header";
import Post from "./Pages/Post/Post";
import { useEffect } from "react";


function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route
          path="*"
          element={
            <div style={{ padding: 20, fontSize: 24, textAlign: "center" }}>
              404: Page Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
