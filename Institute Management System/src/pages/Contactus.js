import FormContainer from "../components/FormContainer";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="contactus">
      <img className="conta-1-icon" alt="" src="/conta-1@2x.png" />
      <div className="contact-us1">CONTACT US</div>
      <div className="group-container">
        <div className="rectangle-parent9">
          <div className="group-child30" />
          <b className="b">0717352566</b>
        </div>
        <img className="charmphone-icon1" alt="" src="/charmphone.svg" />
      </div>
      <FormContainer />
      <img className="group-icon" alt="" src="/group.svg" />
      <div className="contactus-child" />
      <div className="charmmap-pin-parent">
        <img className="charmmap-pin-icon" alt="" src="/charmmappin.svg" />
        <b className="n020-wisdom-academycolombo">
          N020, WISDOM ACADEMY,COLOMBO ROAD,GALLE
        </b>
      </div>
    </div>
  );
};

export default Contactus;
