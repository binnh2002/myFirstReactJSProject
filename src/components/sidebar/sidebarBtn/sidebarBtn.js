import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "./sidebarBtn.css";

export default function SidebarBtn(props) {
  let location = useLocation();
  let isActive = location.pathname === props.to;
  let btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <div className="sidebarBtn">
      <Link to={props.to}>
        <div className={btnClass}>
          <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
            {props.icon}
            <p className="btn-title">{props.title}</p>
          </IconContext.Provider>
        </div>
      </Link>
    </div>
  );
}
