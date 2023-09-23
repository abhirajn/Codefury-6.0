import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Tips from "./Pages/Tips";
<<<<<<< HEAD
import Guidance from "./Pages/Guidance";
import PostQuestions from "./Pages/PostQuestions";
=======
import Guidance from "./Pages/courseimages/Guidance";
>>>>>>> 69769793736b41e41fd660a6067fff70f81e07b1

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path={"/signin"} element={<Login />} />
          <Route path={"/signup"} element={<Signup/>} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/guidance"} element = {<Guidance/>} />
          <Route path={"/tips"} element={<Tips/>}></Route>
          <Route path={"/post"} element={<PostQuestions/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
