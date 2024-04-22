import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onGroupButton1Click = useCallback(() => {
    navigate("/marks");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/Staffmembers");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onGroupButton4Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="home8">
      <div className="student-parent">
        <div className="student2">Student</div>
        <div className="rectangle-parent66">
          <div className="group-child186" />
          <div className="group-child187" />
        </div>
        <b className="radeesh-mithushan">RADEESH MITHUSHAN</b>
        <button className="rectangle-parent67">
          <div className="group-child188" />
          <div className="view-profile3">VIEW PROFILE</div>
        </button>
        <button className="rectangle-parent68" onClick={onGroupButton1Click}>
          <div className="group-child189" />
          <div className="marks11">Marks</div>
        </button>
        <div className="mdi-lightaccount4" />
        <img
          className="charmbook-open-icon8"
          alt=""
          src="/charmbookopen6.svg"
        />
        <img
          className="charmchart-line-icon8"
          alt=""
          src="/charmchartline5.svg"
        />
        <textarea className="rectangle-textarea" />
        <img className="charmzoom-in-icon2" alt="" src="/charmzoomin2.svg" />
        <div className="search3">Search</div>
        <img
          className="group-child190"
          alt=""
          src="/rectangle-18@2x.png"
          data-scroll-to="rectangleImage"
        />
        <div className="group-child191" />
        <div className="calendar8">Calendar</div>
        <div className="group-child192" />
        <div className="private-files">Private Files</div>
        <div className="group-child193" />
        <img className="charmphone-icon9" alt="" src="/charmphone61.svg" />
        <img className="primeth-large-icon8" alt="" src="/primethlarge5.svg" />
        <img className="primehome-icon8" alt="" src="/primehome6.svg" />
        <img className="charmcalendar-icon8" alt="" src="/charmcalendar8.svg" />
        <img className="charmpeople-icon8" alt="" src="/charmpeople7.svg" />
        <img className="group-child194" alt="" src="/ellipse-13@2x.png" />
        <div className="group-child195" />
        <div className="notices">NOTICES</div>

        <button className="rectangle-parent69" onClick={onGroupButton2Click}>
          <div className="group-child189" />
          <div className="teachers8">Teachers</div>
        </button>

        <button className="rectangle-parent70" onClick={onGroupButton3Click}>
          <div className="group-child189" />
          <div className="subjects8">Subjects</div>
        </button>
        <button className="rectangle-parent71" onClick={onGroupButton4Click}>
          <div className="group-child189" />
          <div className="contact-us9">Contact Us</div>
        </button>
        <button className="rectangle-parent72" onClick={onGroupButton5Click}>
          <div className="group-child189" />
          <div className="calendar9">Calendar</div>
        </button>
        <button className="rectangle-parent73">
          <div className="group-child189" />
          <div className="home9">Home</div>
        </button>
        <button className="rectangle-parent74">
          <div className="group-child189" />
          <div className="dashboard8">Dashboard</div>
        </button>
      </div>
    </div>
  );
};

export default Home;
