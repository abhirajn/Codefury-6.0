import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Tips from "./Pages/Tips";
import Guidance from "./Pages/courseimages/Guidance";
import PostQuestions from "./Pages/PostQuestions";
import Post from "./Pages/Post";

// import Guidance from "./Pages/courseimages/Guidance";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup/>} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/guidance"} element = {<Guidance/>} />
          <Route path={"/tips"} element={<Tips/>}></Route>
          <Route path={"/post"} element={<PostQuestions/>}/>
          <Route path={"/post/:postId"} element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
