import React from "react";
import "./CardItem.css";

const CardItem = ({ item }) => {
  return (
    <div className="cardItem">
      <div className="company-name" style={{ backgroundColor: item.color }}>
        {item.logo}
      </div>
      <div className="time">
        <span>{item.time} </span>
        &#8226;
        <span> {item.jobType}</span>
      </div>
      <div className="position">{item.position}</div>
      <div className="company">{item.company}</div>
      <div className="location">{item.location}</div>
    </div>
  );
};

export default CardItem;
