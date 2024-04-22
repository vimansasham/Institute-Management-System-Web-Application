import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame22.css";

const Frame9 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/staffmembers1");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  return (
    <div className="profileinfo1">
      <div className="rectangle-parent149">
        <div className="group-child391" />
        <div className="rectangle-parent150">
          <div className="group-child392" />
          <div className="dashboard17">Dashboard</div>
        </div>
        <div className="rectangle-parent151" onClick={onGroupContainer1Click}>
          <div className="group-child392" />
          <div className="calendar19">Calendar</div>
        </div>
        <div className="rectangle-parent152">
          <div className="group-child392" />
          <div className="contact-us18">Contact Us</div>
        </div>
        <div className="rectangle-parent153" onClick={onGroupContainer3Click}>
          <div className="group-child392" />
          <div className="teachers17">Teachers</div>
        </div>
        <div className="rectangle-parent154" onClick={onGroupContainer4Click}>
          <div className="group-child392" />
          <div className="subjects17">Subjects</div>
        </div>
        <div className="student5">Student</div>
        <b className="vimansa-shamali3">VIMANSA SHAMALI</b>
        <div className="group-child397" />
        <img className="group-child398" alt="" src="/ellipse-12@2x.png" />
        <div className="rectangle-parent155">
          <div className="group-child399" />
          <div className="profile1">PROFILE</div>
        </div>
        <div className="group-child400" onClick={onRectangle8Click} />
        <div className="marks23">Marks</div>
        <div className="mdi-lightaccount8" />
        <img
          className="charmbook-open-icon17"
          alt=""
          src="/charmbookopen51.svg"
        />
        <img
          className="charmchart-line-icon17"
          alt=""
          src="/charmchartline51.svg"
        />
        <input className="group-child401" type="search" />
        <img className="charmzoom-in-icon5" alt="" src="/charmzoomin1.svg" />
        <div className="search7">Search</div>
        <div className="group-child402" />
        <div className="group-child403" />
        <div className="address7">Address</div>
        <img
          className="charmcalendar-icon16"
          alt=""
          src="/charmcalendar61.svg"
        />
        <div className="date-of-birth7">Date of Birth</div>
        <input className="charmsquare-tick2" type="checkbox" />
        <div className="gender7">Gender</div>
        <div className="last-name7">Last Name</div>
        <div className="first-name7">First Name</div>
        <div className="e-mail-address7">E-Mail Address</div>
        <div className="user-name7">User Name</div>
        <div className="joining-date7">Joining Date</div>
        <div className="profile-info3">PROFILE INFO</div>
        <div className="account-info7">ACCOUNT INFO</div>
        <div className="group-child404" />
        <div className="male7">Male</div>
        <div className="female7">Female</div>
        <input className="group-child405" type="text" />
        <input className="group-child406" type="text" />
        <input className="charmsquare-tick3" type="checkbox" />
        <input className="group-child407" type="text" />
        <input className="group-child408" type="date" />
        <div className="group-child409" />
        <input className="group-child410" type="email" />
        <input className="group-child411" type="text" />
        <input className="group-child412" type="date" />
        <img className="charmpeople-icon17" alt="" src="/charmpeople61.svg" />
        <img className="charmphone-icon18" alt="" src="/charmphone51.svg" />
        <img
          className="charmcalendar-icon17"
          alt=""
          src="/charmcalendar71.svg"
        />
        <img className="primehome-icon17" alt="" src="/primehome61.svg" />
        <img className="primeth-large-icon17" alt="" src="/primethlarge4.svg" />
        <div className="rectangle-parent156" onClick={onGroupContainer6Click}>
          <div className="group-child392" />
          <div className="home19">Home</div>
        </div>
      </div>
    </div>
  );
};

export default Frame9;
