import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Coursesinfo.css";

const Coursesinfo = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/staffmembers");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onMarksTextClick = useCallback(() => {
    navigate("/marks");
  }, [navigate]);

  const onMissNayomiPereraClick = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  return (
    <div className="coursesinfo">
      <div className="rectangle-parent26">
        <div className="group-child77" />
        <div className="rectangle-parent27">
          <div className="group-child78" />
          <div className="dashboard3">Dashboard</div>
        </div>
        <div className="rectangle-parent28">
          <div className="group-child78" />
          <div className="calendar3">Calendar</div>
        </div>
        <div className="rectangle-parent29" onClick={onGroupContainer2Click}>
          <div className="group-child78" />
          <div className="home3">Home</div>
        </div>
        <div className="rectangle-parent30" onClick={onGroupContainer3Click}>
          <div className="group-child78" />
          <div className="contact-us4">Contact Us</div>
        </div>
        <div className="rectangle-parent31" onClick={onGroupContainer4Click}>
          <div className="group-child78" />
          <div className="teachers3">Teachers</div>
        </div>
        <div className="rectangle-parent32" onClick={onGroupContainer5Click}>
          <div className="group-child78" />
          <div className="subjects3">Subjects</div>
        </div>
        <div className="group-child84" />
        <div className="medium1">MEDIUM</div>
        <div className="teacher1">TEACHER</div>
        <div className="subject1">SUBJECT</div>
        <div className="grade1">GRADE</div>
        <div className="group-child85" />
        <b className="wisdom-academy-online-container2">
          <p className="wisdom-academy-online2">{`WISDOM ACADEMY ONLINE `}</p>
          <p className="wisdom-academy-online2">EDUCATION</p>
          <p className="wisdom-academy-online2">SYSTEM</p>
        </b>
        <div className="group-child86" />
        <div className="marks6" onClick={onMarksTextClick}>
          Marks
        </div>
        <img
          className="charmbook-open-icon3"
          alt=""
          src="/charmbookopen2.svg"
        />
        <img
          className="charmchart-line-icon3"
          alt=""
          src="/charmchartline11.svg"
        />
        <input className="group-child87" type="search" />
        <div className="search1">Search</div>
        <div className="group-child88" />
        <img className="charmphone-icon4" alt="" src="/charmphone3.svg" />
        <img className="primeth-large-icon3" alt="" src="/primethlarge.svg" />
        <img className="primehome-icon3" alt="" src="/primehome2.svg" />
        <img className="charmcalendar-icon3" alt="" src="/charmcalendar2.svg" />
        <img className="charmpeople-icon3" alt="" src="/charmpeople2.svg" />
        <img className="group-child89" alt="" src="/rectangle-361@2x.png" />
        <img className="group-child90" alt="" src="/rectangle-371@2x.png" />
        <div className="courses">COURSES</div>
        <img className="group-child91" alt="" src="/line-32.svg" />
        <div className="group-child92" />
        <div className="div2">6</div>
        <div className="sinhala2">Sinhala</div>
        <Link
          className="missnayomi-perera"
          to="/frame-61"
          onClick={onMissNayomiPereraClick}
        >
          Miss.Nayomi Perera
        </Link>
        <div className="group-child93" />
        <div className="group-child94" />
        <div className="miss-deshani-gamage2">Miss. Deshani Gamage</div>
        <div className="english1">English</div>
        <div className="group-child95" />
        <div className="mr-mahesh1">{`Mr. Mahesh  `}</div>
        <div className="group-child96" />
        <div className="div3">7</div>
        <div className="group-child97" />
        <div className="group-child98" />
        <div className="miss-sandarenu">Miss. Sandarenu</div>
        <div className="mathematics2">MATHEMATICS</div>
        <div className="mr-hemapala-lokuge3">Mr. Hemapala Lokuge</div>
        <div className="sinhala3">Sinhala</div>
        <div className="mr-anura-gamage3">Mr. Anura Gamage</div>
        <div className="mr-hemapala-lokuge4">Mr. Hemapala Lokuge</div>
      </div>
    </div>
  );
};

export default Coursesinfo;
