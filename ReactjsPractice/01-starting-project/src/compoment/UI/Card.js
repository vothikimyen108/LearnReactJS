import classe from "./Card.module.css";
import React from "react";
const Card = (props) => {
  return <div className={classe.card}>{props.children}</div>;
};
export default Card;
