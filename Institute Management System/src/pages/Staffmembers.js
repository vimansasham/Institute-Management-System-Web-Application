import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Staffmembers.css";

const Staffmembers = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/Addteacherdata");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/coursesinfo");
  }, [navigate]);

  const onGroupContainer15Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onGroupContainer16Click = useCallback(() => {
    navigate("/marks");
  }, [navigate]);

  return (
    <div className="staffmembers">
      <div className="group-parent1">
        <div className="rectangle-parent10">
          <div className="group-child31" />
          <div className="mathematics">MATHEMATICS</div>
        </div>
        <div className="group-child32" />
        <img className="group-child33" alt="" src="/ellipse-2@2x.png" />
        <img className="group-child34" alt="" src="/ellipse-7@2x.png" />
        <input className="group-child35" placeholder="Search" type="search" />
        <div className="group-child36" />
        <img className="group-child37" alt="" src="/rectangle-37@2x.png" />
        <div className="staff-members"> STAFF MEMBERS</div>
        <img className="line-icon" alt="" src="/line-3.svg" />
        <img className="group-child38" alt="" src="/ellipse-3@2x.png" />
        <img className="group-child39" alt="" src="/ellipse-5@2x.png" />
        <img className="group-child40" alt="" src="/ellipse-6@2x.png" />
        <div className="rectangle-parent11">
          <div className="group-child41" />
          <div className="science">SCIENCE</div>
        </div>
        <div className="mr-anura-gamage-parent">
          <div className="mr-anura-gamage">Mr. Anura Gamage</div>
          <div className="bsc-science">Bsc. Science</div>
        </div>
        <div className="miss-deshani-gamage-parent">
          <div className="miss-deshani-gamage">Miss. Deshani Gamage</div>
          <div className="teacher-of-gov">Teacher of Gov School</div>
        </div>
        <img className="group-child42" alt="" src="/ellipse-8@2x.png" />
        <img className="group-child43" alt="" src="/ellipse-9@2x.png" />
        <div className="miss-hiruni-deepa-parent">
          <div className="miss-hiruni-deepa">Miss. Hiruni deepa</div>
          <div className="bsc-science1">Bsc. Science</div>
        </div>
        <Link
          className="miss-nayomi-perera-parent"
          to="/Addteacherdata"
          onClick={onGroupLinkClick}
        >
          <div className="miss-nayomi-perera">Miss. Nayomi Perera</div>
          <div className="teacher-of-gov1">Teacher of Gov School</div>
        </Link>
        <div className="miss-nisha-parent">
          <div className="miss-nisha">Miss. nisha</div>
          <div className="bsc-science2">Bsc. Science</div>
        </div>
        <div className="mr-mahesh-parent">
          <div className="mr-mahesh">{`Mr. Mahesh `}</div>
          <div className="bsc-science3">Bsc. Science</div>
        </div>
        <div className="mr-hemapala-lokuge-parent">
          <div className="mr-hemapala-lokuge">Mr. Hemapala Lokuge</div>
          <div className="teacher-of-gov2">Teacher of Gov School</div>
        </div>
        <div className="vector-parent">
          <img className="group-child44" alt="" src="/rectangle-71.svg" />
          <div className="add">
            <span>Add</span>
            <span className="span">{` `}</span>
          </div>
        </div>
        <div className="vector-group">
          <img className="group-child44" alt="" src="/rectangle-72.svg" />
          <div className="delete">Delete</div>
        </div>
      </div>
      <div className="rectangle-parent12">
        <div className="group-child46" />
        <div className="rectangle-parent13" onClick={onGroupContainer11Click}>
          <div className="group-child47" />
          <div className="home1">Home</div>
        </div>
        <div className="rectangle-parent14">
          <div className="group-child47" />
          <div className="dashboard1">Dashboard</div>
        </div>
        <div className="rectangle-parent15">
          <div className="group-child47" />
          <div className="calendar1">Calendar</div>
        </div>
        <div className="group-child50" onClick={onRectangle9Click} />
        <div className="subjects1">Subjects</div>
        <div className="rectangle-parent16">
          <div className="group-child47" />
          <div className="teachers1">Teachers</div>
        </div>
        <div className="rectangle-parent17" onClick={onGroupContainer15Click}>
          <div className="group-child47" />
          <div className="contact-us2">Contact Us</div>
        </div>
        <b className="wisdom-academy-online-container">
          <p className="wisdom-academy-online">{`WISDOM ACADEMY ONLINE `}</p>
          <p className="wisdom-academy-online">EDUCATION</p>
          <p className="wisdom-academy-online">SYSTEM</p>
        </b>
        <div className="rectangle-parent18" onClick={onGroupContainer16Click}>
          <div className="group-child47" />
          <div className="marks1">Marks</div>
        </div>
        <img
          className="charmbook-open-icon1"
          alt=""
          src="/charmbookopen1.svg"
        />
        <img
          className="charmchart-line-icon1"
          alt=""
          src="/charmchartline1.svg"
        />
        <div className="group-child54" />
        <img className="charmphone-icon2" alt="" src="/charmphone1.svg" />
        <img className="primeth-large-icon1" alt="" src="/primethlarge.svg" />
        <img className="primehome-icon1" alt="" src="/primehome1.svg" />
        <img className="charmcalendar-icon1" alt="" src="/charmcalendar.svg" />
        <img className="charmpeople-icon1" alt="" src="/charmpeople.svg" />
        <img className="group-child55" alt="" src="/rectangle-36@2x.png" />
      </div>
    </div>
  );
};

export default Staffmembers;
