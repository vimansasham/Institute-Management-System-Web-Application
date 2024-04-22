import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Marks.css";

const Marks = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/staffmembers");
  }, [navigate]);

  return (
    <div className="marks2">
      <div className="group-parent2">
        <div className="group-wrapper">
          <div className="rectangle-wrapper" onClick={onGroupContainerClick}>
            <div className="group-child56" />
          </div>
        </div>
        <div className="marks3">MARKS</div>
        <div className="medium">MEDIUM</div>
        <div className="teacher">TEACHER</div>
        <div className="subject">SUBJECT</div>
        <div className="grade">GRADE</div>
        <div className="group-child57" />
        <div className="mdi-lightaccount" />
        <input className="group-child58" placeholder="Search" type="search" />
        <div className="group-child59" />
        <div className="rectangle-parent19" onClick={onGroupContainer2Click}>
          <div className="group-child60" />
          <div className="home2">Home</div>
        </div>
        <div className="rectangle-parent20">
          <div className="group-child60" />
          <div className="dashboard2">Dashboard</div>
        </div>
        <div className="rectangle-parent21" onClick={onGroupContainer4Click}>
          <div className="group-child60" />
          <div className="calendar2">Calendar</div>
        </div>
        <div className="rectangle-parent22" onClick={onGroupContainer5Click}>
          <div className="group-child60" />
          <div className="subjects2">Subjects</div>
        </div>
        <div className="rectangle-parent23" onClick={onGroupContainer6Click}>
          <div className="group-child60" />
          <div className="contact-us3">Contact Us</div>
        </div>
        <div className="rectangle-parent24" onClick={onGroupContainer7Click}>
          <div className="group-child60" />
          <div className="teachers2">Teachers</div>
        </div>
        <b className="wisdom-academy-online-container1">
          <p className="wisdom-academy-online1">{`WISDOM ACADEMY ONLINE `}</p>
          <p className="wisdom-academy-online1">EDUCATION</p>
          <p className="wisdom-academy-online1">SYSTEM</p>
        </b>
        <div className="rectangle-parent25">
          <div className="group-child60" />
          <div className="marks4">Marks</div>
        </div>
        <img
          className="charmbook-open-icon2"
          alt=""
          src="/charmbookopen11.svg"
        />
        <img
          className="charmchart-line-icon2"
          alt=""
          src="/charmchartline11.svg"
        />
        <div className="group-child67" />
        <img className="charmphone-icon3" alt="" src="/charmphone2.svg" />
        <img className="primeth-large-icon2" alt="" src="/primethlarge1.svg" />
        <img className="primehome-icon2" alt="" src="/primehome11.svg" />
        <img className="charmcalendar-icon2" alt="" src="/charmcalendar1.svg" />
        <img className="charmpeople-icon2" alt="" src="/charmpeople1.svg" />
        <img className="group-child68" alt="" src="/rectangle-36@2x.png" />
        <img className="group-child69" alt="" src="/rectangle-371@2x.png" />
        <div className="marks5">MARKS</div>
        <img className="group-child70" alt="" src="/line-31.svg" />
        <div className="group-child71" />
        <div className="div">6</div>
        <div className="sinhala">Sinhala</div>
        <div className="mr-anura-gamage1">Mr. Anura Gamage</div>
        <div className="ms1">MS1</div>
        <div className="group-child72" />
        <div className="group-child73" />
        <div className="miss-deshani-gamage1">Miss. Deshani Gamage</div>
        <div className="english">English</div>
        <div className="group-child74" />
        <div className="mr-mahesh-dilshan">Mr. Mahesh Dilshan</div>
        <div className="group-child75" />
        <div className="div1">7</div>
        <div className="group-child76" />
        <div className="mathematics1">MATHEMATICS</div>
        <div className="mr-hemapala-lokuge1">Mr. Hemapala Lokuge</div>
        <div className="sinhala1">Sinhala</div>
        <div className="mr-anura-gamage2">Mr. Anura Gamage</div>
        <div className="mr-hemapala-lokuge2">Mr. Hemapala Lokuge</div>
        <div className="exam-no">EXAM NO</div>
      </div>
    </div>
  );
};

export default Marks;
