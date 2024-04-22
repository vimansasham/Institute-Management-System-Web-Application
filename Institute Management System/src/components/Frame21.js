import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame21.css";

const Frame7 = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/staffmembers1");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  return (
    <div className="teacherprofileinfo1">
      <div className="rectangle-parent132">
        <div className="group-child341" />
        <div className="rectangle-parent133">
          <div className="group-child342" />
          <div className="dashboard15">Dashboard</div>
        </div>
        <div className="rectangle-parent134">
          <div className="group-child342" />
          <div className="calendar17">Calendar</div>
        </div>
        <div className="rectangle-parent135" onClick={onGroupContainer2Click}>
          <div className="group-child342" />
          <div className="home17">Home</div>
        </div>
        <div className="rectangle-parent136">
          <div className="group-child342" />
          <div className="contact-us16">Contact Us</div>
        </div>
        <div className="rectangle-parent137" onClick={onGroupContainer4Click}>
          <div className="group-child342" />
          <div className="teachers15">Teachers</div>
        </div>
        <div className="rectangle-parent138" onClick={onGroupContainer5Click}>
          <div className="group-child342" />
          <div className="subjects15">Subjects</div>
        </div>
        <div className="teacher7">Teacher</div>
        <div className="group-child348" />
        <b className="nayomi-perera3">NAYOMI PERERA</b>
        <img className="group-child349" alt="" src="/ellipse-1@2x.png" />
        <div className="rectangle-parent139">
          <div className="group-child350" />
          <div className="view-profile6">VIEW PROFILE</div>
        </div>
        <div className="rectangle-parent140" onClick={onGroupContainer7Click}>
          <div className="group-child342" />
          <div className="marks21">Marks</div>
        </div>
        <div className="mdi-lightaccount7" />
        <img
          className="charmbook-open-icon15"
          alt=""
          src="/charmbookopen31.svg"
        />
        <img
          className="charmchart-line-icon15"
          alt=""
          src="/charmchartline31.svg"
        />
        <img className="charmzoom-in-icon4" alt="" src="/charmzoomin21.svg" />
        <input className="group-child352" placeholder="Search" type="search" />
        <div className="group-child353" />
        <div className="group-child354" />
        <div className="address5">Address</div>
        <div className="date-of-birth5">Date of Birth</div>
        <input className="charmsquare-tick" required={true} type="checkbox" />
        <div className="gender5">Gender</div>
        <div className="last-name5">Last Name</div>
        <div className="first-name5">First Name</div>
        <div className="e-mail-address5">E-Mail Address</div>
        <div className="user-name5">User Name</div>
        <div className="joining-date5">Joining Date</div>
        <div className="profile-info2">PROFILE INFO</div>
        <div className="account-info5">ACCOUNT INFO</div>
        <div className="group-child355" />
        <div className="male5">Male</div>
        <div className="female5">Female</div>
        <input className="group-child356" type="text" />
        <input className="group-child357" type="text" />
        <input className="charmsquare-tick1" required={true} type="checkbox" />
        <input className="group-child358" type="text" />
        <input className="group-child359" type="date" />
        <div className="group-child360" />
        <input className="group-child361" type="email" />
        <input className="group-child362" type="text" />
        <div className="group-child363" />
        <div className="employee-code3">Employee Code</div>
        <div className="current-position3">Current Position</div>
        <div className="working-hours3">Working Hours</div>
        <input className="group-child364" type="text" />
        <input className="group-child365" type="text" />
        <input className="group-child366" type="text" />
        <img
          className="charmcalendar-icon14"
          alt=""
          src="/charmcalendar31.svg"
        />
        <img className="charmpeople-icon15" alt="" src="/charmpeople41.svg" />
        <img className="charmphone-icon16" alt="" src="/charmphone31.svg" />
        <div className="majesticonshome-line3" />
        <img
          className="primeth-large-icon15"
          alt=""
          src="/primethlarge21.svg"
        />
        <img className="primehome-icon15" alt="" src="/primehome41.svg" />
      </div>
    </div>
  );
};

export default Frame7;
