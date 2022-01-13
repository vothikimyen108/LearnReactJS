import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import React, { useContext } from "react";
import ContextCart from "../../Context/ContextCart";
const HeaderCartButton = (props) => {
  const ctxCart = useContext(ContextCart);
  let result = +0;
  ctxCart.items.forEach((item) => {
    result = item.amount + result;
    return result;
  });
  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{result}</span>
    </button>
  );
};

export default HeaderCartButton;
