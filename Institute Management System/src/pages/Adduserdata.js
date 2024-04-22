import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CharmsquareTick1 from "../components/CharmsquareTick1";
import "./Adduserdata.css";

const Adduserdata = () => {
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

  return (
    <div className="adduserdata">
      <div className="adduserdata-inner">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="rectangle-group">
            <div className="group-item" />
            <div className="dashboard">Dashboard</div>
          </div>
          <div className="rectangle-container">
            <div className="group-item" />
            <div className="calendar">Calendar</div>
          </div>
          <div className="group-div" onClick={onGroupContainer2Click}>
            <div className="group-item" />
            <div className="home">Home</div>
          </div>
          <div className="rectangle-parent1" onClick={onGroupContainer3Click}>
            <div className="group-item" />
            <div className="contact-us">Contact Us</div>
          </div>
          <div className="rectangle-parent2" onClick={onGroupContainer4Click}>
            <div className="group-item" />
            <div className="teachers">Teachers</div>
          </div>
          <div className="rectangle-parent3" onClick={onGroupContainer5Click}>
            <div className="group-item" />
            <div className="subjects">Subjects</div>
          </div>
          <div className="student">Student</div>
          <div className="group-child4" />
          <b className="vimansa-shamali">VIMANSA SHAMALI</b>
          <div className="group-child5" />
          <div className="view-profile">VIEW PROFILE</div>
          <div className="group-child6" />
          <div className="marks" onClick={onMarksTextClick}>
            Marks
          </div>
          <img
            className="charmbook-open-icon"
            alt=""
            src="/charmbookopen.svg"
          />
          <img
            className="charmchart-line-icon"
            alt=""
            src="/charmchartline.svg"
          />
          <div className="group-child7" />
          <div className="search">Search</div>
          <div className="line-div" />
          <div className="group-child8" />
          <div className="address">Address</div>
          <div className="date-of-birth">Date of Birth</div>
          <CharmsquareTick1
            emptyText={`{true}`}
            propLeft="729.46px"
            propWidth="58.65px"
            propHeight="31.01px"
          />
          <div className="gender">Gender</div>
          <div className="last-name">Last Name</div>
          <div className="first-name">First Name</div>
          <div className="e-mail-address">E-Mail Address</div>
          <div className="user-name">User Name</div>
          <div className="joining-date">Joining Date</div>
          <div className="edit-profile-info">EDIT PROFILE INFO</div>
          <div className="account-info">ACCOUNT INFO</div>
          <div className="group-child9" />
          <div className="male">Male</div>
          <div className="female">Female</div>
          <input className="rectangle-input" type="text" />
          <input className="group-child10" type="text" />
          <CharmsquareTick1
            propLeft="851.99px"
            propWidth="58.65px"
            propHeight="31.01px"
          />
          <input className="group-child11" type="text" />
          <input className="group-child12" type="date" />
          <button className="group-button">
            <div className="group-child13" />
            <div className="submit">SUBMIT</div>
          </button>
          <div className="group-child14" />
          <input className="group-child15" type="email" />
          <input className="group-child16" type="text" />
          <input className="group-child17" type="date" />
          <img className="primeth-large-icon" alt="" src="/primethlarge3.svg" />
          <img className="primehome-icon" alt="" src="/primehome.svg" />
          <img
            className="charmcalendar-icon"
            alt=""
            src="/charmcalendar5.svg"
          />
          <img className="charmpeople-icon" alt="" src="/charmpeople5.svg" />
          <img className="charmphone-icon" alt="" src="/charmphone4.svg" />
          <img className="ellipse-icon" alt="" src="/ellipse-11@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Adduserdata;
