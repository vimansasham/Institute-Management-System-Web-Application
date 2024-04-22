import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="login">
      <div className="login-inner">
        <div className="rounded-rectangle-parent">
          <div className="rounded-rectangle" />
          <div className="i-forgot-my-password-parent">
            <Link className="i-forgot-my" to="/forgotpw">
              I Forgot My Password
            </Link>
            <input className="group-input" placeholder="PASSWORD" type="text" />
            <input
              className="group-child18"
              placeholder="USER NAME"
              type="text"
            />
            <img className="rectangle-icon" alt="" src="/rectangle-3@2x.png" />
            <b className="log-in">LOG IN</b>
            <button className="rectangle-parent4" onClick={onGroupButtonClick}>
              <div className="group-child19" />
              <b className="login1">LOGIN</b>
            </button>
          </div>
          <div className="rectangle-parent5">
            <img className="group-child20" alt="" src="/rectangle-4@2x.png" />
            <b className="welcome-to-wisdom-container">
              <p className="welcome-to-wisdom">{`WELCOME TO WISDOM ACADEMY ONLINE `}</p>
              <p className="welcome-to-wisdom">EDUCATION SYSTEM</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;