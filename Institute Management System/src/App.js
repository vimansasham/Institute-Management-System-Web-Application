import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Adduserdata from "./pages/Adduserdata";
import Forgotpw from "./pages/Forgotpw";
import Contactus from "./pages/Contactus";
import Staffmembers from "./pages/Staffmembers";
import Marks from "./pages/Marks";
import Coursesinfo from "./pages/Coursesinfo";
import Courses from "./pages/Courses";
import Addteacherdata from "./pages/Addteacherdata";
import Home from "./pages/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/adduserdata":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpw1":
        title = "";
        metaDescription = "";
        break;
      case "/contactus":
        title = "";
        metaDescription = "";
        break;
      case "/staffmembers":
        title = "";
        metaDescription = "";
        break;
      case "/marks":
        title = "";
        metaDescription = "";
        break;
      case "/coursesinfo":
        title = "";
        metaDescription = "";
        break;
      case "/courses":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/adduserdata" element={<Adduserdata />} />
      <Route path="/forgotpw" element={<Forgotpw />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/staffmembers" element={<Staffmembers />} />
      <Route path="/marks" element={<Marks />} />
      <Route path="/coursesinfo" element={<Coursesinfo />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/Addteacherdata" element={<Addteacherdata />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
