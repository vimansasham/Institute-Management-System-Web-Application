import { useMemo } from "react";
import "./CharmsquareTick1.css";

const CharmsquareTick1 = ({ emptyText, propLeft, propWidth, propHeight }) => {
  const charmsquareTickStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propLeft, propWidth, propHeight]);

  return (
    <input
      className="charmsquare-tick4"
      type="checkbox"
      required={emptyText}
      style={charmsquareTickStyle}
    />
  );
};

export default CharmsquareTick1;
