import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerForm from "../components/ContainerForm";
import "./Courses.css";

const Courses = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/coursesinfo");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/staffmembers");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/marks");
  }, [navigate]);

  return (
    <div className="courses1">
      <div className="rectangle-parent33">
        <div className="group-child99" />
        <div className="rectangle-parent34" onClick={onGroupContainerClick}>
          <div className="group-child100" />
          <div className="home4">Home</div>
        </div>
        <div className="rectangle-parent35">
          <div className="group-child100" />
          <div className="dashboard4">Dashboard</div>
        </div>
        <div className="rectangle-parent36">
          <div className="group-child100" />
          <div className="calendar4">Calendar</div>
        </div>
        <div className="rectangle-parent37" onClick={onGroupContainer3Click}>
          <div className="group-child100" />
          <div className="teachers4">Teachers</div>
        </div>
        <div className="group-child104" />
        <div className="subjects4">Subjects</div>
        <div className="rectangle-parent38" onClick={onGroupContainer4Click}>
          <div className="group-child100" />
          <div className="contact-us5">Contact Us</div>
        </div>
        <b className="wisdom-academy-online-container3">
          <p className="wisdom-academy-online3">{`WISDOM ACADEMY ONLINE `}</p>
          <p className="wisdom-academy-online3">EDUCATION</p>
          <p className="wisdom-academy-online3">SYSTEM</p>
        </b>
        <div className="rectangle-parent39" onClick={onGroupContainer5Click}>
          <div className="group-child100" />
          <div className="marks7">Marks</div>
        </div>
        <img
          className="charmbook-open-icon4"
          alt=""
          src="/charmbookopen3.svg"
        />
        <img
          className="charmchart-line-icon4"
          alt=""
          src="/charmchartline2.svg"
        />
        <div className="group-child107" />
        <img className="charmphone-icon5" alt="" src="/charmphone5.svg" />
        <img className="primeth-large-icon4" alt="" src="/primethlarge2.svg" />
        <img className="primehome-icon4" alt="" src="/primehome3.svg" />
        <img className="charmcalendar-icon4" alt="" src="/charmcalendar3.svg" />
        <img className="charmpeople-icon4" alt="" src="/charmpeople3.svg" />
        <img className="group-child108" alt="" src="/rectangle-36@2x.png" />
      </div>
      <div className="group-parent3">
        <div className="rectangle-frame">
          <div className="group-child109" />
        </div>
        <ContainerForm
          dimensions="/rectangle-45@2x.png"
          onGroupLinkClick={onGroupLinkClick}
        />
      </div>
    </div>
  );
};

export default Courses;
