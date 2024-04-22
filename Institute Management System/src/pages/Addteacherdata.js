import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Addteacherdata.css";

const Addteacherdata = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/staffmembers");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/marks");
  }, [navigate]);

  return (
    <div className="addteacherdata">
      <div className="addteacherdata-inner">
        <input className="group-child110" placeholder="Search" type="search" />
      </div>
      <div className="addteacherdata-child">
        <div className="group-frame">
          <div className="rectangle-parent40">
            <div className="group-child111" />
            <div className="rectangle-parent41">
              <div className="group-child112" />
              <div className="dashboard5">Dashboard</div>
            </div>
            <div className="rectangle-parent42">
              <div className="group-child112" />
              <div className="calendar5">Calendar</div>
            </div>
            <div
              className="rectangle-parent43"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child112" />
              <div className="home5">Home</div>
            </div>
            <div
              className="rectangle-parent44"
              onClick={onGroupContainer4Click}
            >
              <div className="group-child112" />
              <div className="contact-us6">Contact Us</div>
            </div>
            <div
              className="rectangle-parent45"
              onClick={onGroupContainer5Click}
            >
              <div className="group-child112" />
              <div className="teachers5">Teachers</div>
            </div>
            <div
              className="rectangle-parent46"
              onClick={onGroupContainer6Click}
            >
              <div className="group-child112" />
              <div className="subjects5">Subjects</div>
            </div>
            <div className="teacher2">Teacher</div>
            <div className="group-child118" />
            <b className="nayomi-perera">NAYOMI PERERA</b>
            <img className="group-child119" alt="" src="/ellipse-1@2x.png" />
            <div className="rectangle-parent47">
              <div className="group-child120" />
              <div className="view-profile1">VIEW PROFILE</div>
            </div>
            <div className="group-child121" onClick={onRectangle9Click} />
            <div className="marks8">Marks</div>
            <div className="mdi-lightaccount1" />
            <img
              className="charmbook-open-icon5"
              alt=""
              src="/charmbookopen4.svg"
            />
            <img
              className="charmchart-line-icon5"
              alt=""
              src="/charmchartline3.svg"
            />
            <div className="group-child122" />
            <div className="group-child123" />
            <div className="address1">Address</div>
            <div className="date-of-birth1">Date of Birth</div>
            <img
              className="charmsquare-tick-icon"
              alt=""
              src="/charmsquaretick.svg"
            />
            <div className="gender1">Gender</div>
            <div className="last-name1">Last Name</div>
            <div className="first-name1">First Name</div>
            <div className="e-mail-address1">E-Mail Address</div>
            <div className="user-name1">User Name</div>
            <div className="joining-date1">Joining Date</div>
            <div className="edit-profile-info1">EDIT PROFILE INFO</div>
            <div className="account-info1">ACCOUNT INFO</div>
            <div className="group-child124" />
            <div className="male1">Male</div>
            <div className="female1">Female</div>
            <input className="group-child125" type="text" />
            <input className="group-child126" type="text" />
            <img
              className="charmsquare-tick-icon1"
              alt=""
              src="/charmsquaretick1.svg"
            />
            <input className="group-child127" type="text" />
            <input className="group-child128" type="date" />
            <div className="group-child129" />
            <input className="group-child130" type="email" />
            <input className="group-child131" type="text" />
            <div className="group-child132" />
            <div className="employee-code">Employee Code</div>
            <div className="current-position">Current Position</div>
            <div className="working-hours">Working Hours</div>
            <input className="group-child133" type="text" />
            <input className="group-child134" type="text" />
            <input className="group-child135" type="text" />
            <img
              className="charmcalendar-icon5"
              alt=""
              src="/charmcalendar4.svg"
            />
            <img className="charmpeople-icon5" alt="" src="/charmpeople4.svg" />
            <img className="charmphone-icon6" alt="" src="/charmphone6.svg" />
            <div className="majesticonshome-line" />
            <img
              className="primeth-large-icon5"
              alt=""
              src="/primethlarge21.svg"
            />
            <img className="primehome-icon5" alt="" src="/primehome4.svg" />
            <button className="rectangle-parent48">
              <div className="group-child136" />
              <div className="submit1">SUBMIT</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addteacherdata;
