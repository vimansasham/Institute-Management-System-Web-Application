import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Forgotpw.css";

const Forgotpw = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className="forgotpw">
      <div className="group-parent" onClick={onGroupContainer2Click}>
        <div className="rectangle-parent6">
          <div className="group-child21" />
          <div className="group-child22" />
          <input
            className="group-child23"
            placeholder="CONFIRM PASSWORD"
            type="password"
          />
          <input className="group-child24" placeholder="MOBILE NO" type="tel" />
          <input className="group-child25" placeholder="E MAIL" type="email" />
          <img className="group-child26" alt="" src="/rectangle-31@2x.png" />
          <b className="log-in1">LOG IN</b>
          <button className="rectangle-parent7" onClick={onGroupButtonClick}>
            <div className="group-child27" />
            <b className="reset">RESET</b>
          </button>
          <input
            className="group-child28"
            placeholder="NEW PASSWORD"
            type="password"
          />
        </div>
        <div className="rectangle-parent8">
          <img className="group-child29" alt="" src="/rectangle-41@2x.png" />
          <b className="welcome-to-wisdom-container1">
            <p className="welcome-to-wisdom1">{`WELCOME TO WISDOM ACADEMY ONLINE `}</p>
            <p className="welcome-to-wisdom1">EDUCATION SYSTEM</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Forgotpw;
