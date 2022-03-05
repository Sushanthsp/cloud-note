import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/notes/ThemeContext";

export const Alert = (props) => {
  const { alerts } = useContext(ThemeContext);
  
  const beautify = (msg) => {
    const letter = msg.toLowerCase();
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {alerts.message && (
        <div
          className={`alert alert-${alerts.type}  alert-dismissible fade show`}
          role="alert"
        >
          <strong>{beautify(alerts.type)}</strong>
          {beautify(alerts.message)}
        </div>
      )}
    </div>
  );
};
