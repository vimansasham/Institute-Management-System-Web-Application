import { Link } from "react-router-dom";
import "./ContainerForm.css";

const ContainerForm = ({ dimensions, onGroupLinkClick }) => {
  return (
    <div className="group-parent10">
      <div className="rectangle-parent162">
        <div className="group-child425" />
        <div className="sinhala-language">
          <p className="language">{`SINHALA `}</p>
          <p className="language">LANGUAGE</p>
        </div>
      </div>
      <input className="group-child426" type="search" />
      <div className="search8">Search</div>
      <img className="group-child427" alt="" src="/rectangle-372@2x.png" />
      <div className="courses4">COURSES</div>
      <img className="group-child428" alt="" src="/rectangle-39@2x.png" />
      <img className="group-child429" alt="" src="/rectangle-38@2x.png" />
      <img className="group-child430" alt="" src="/rectangle-40@2x.png" />
      <img className="group-child431" alt="" src="/rectangle-411@2x.png" />
      <img className="group-child432" alt="" src="/rectangle-421@2x.png" />
      <img className="group-child433" alt="" src="/rectangle-43@2x.png" />
      <img className="group-child434" alt="" src="/rectangle-44@2x.png" />
      <img className="group-child435" alt="" src={dimensions} />
      <div className="rectangle-parent163">
        <div className="group-child436" />
        <div className="english4">ENGLISH</div>
      </div>
      <div className="rectangle-parent164">
        <div className="group-child437" />
        <div className="science2">SCIENCE</div>
      </div>
      <div className="rectangle-parent165">
        <div className="group-child438" />
        <div className="history">HISTORY</div>
      </div>
      <div className="rectangle-parent166">
        <div className="group-child439" />
        <div className="ict">ICT</div>
      </div>
      <div className="rectangle-parent167">
        <div className="group-child440" />
        <div className="music">MUSIC</div>
      </div>
      <div className="rectangle-parent168">
        <div className="group-child441" />
        <div className="business-accounting-container">
          <p className="language">{`  BUSINESS &`}</p>
          <p className="language"> ACCOUNTING</p>
        </div>
      </div>
      <div className="select-the-course">Select the course</div>
      <Link className="group-a" to="/frame-8" onClick={onGroupLinkClick}>
        <div className="group-child442" />
        <div className="mathematics6">MATHEMATICS</div>
      </Link>
    </div>
  );
};

export default ContainerForm;
