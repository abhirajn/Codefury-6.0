import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/signin"} element={<Login />} />
          <Route path={"/signup"} element={<Signup/>} />
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
