import React from "react";
import classes from "./MealItem.module.css";
import MealsItemForm from "./MealItemForm";
import ContextCart from "../../../Context/ContextCart";
//sử dung context hook
import { useContext } from "react";
const MealItem = (props) => {
  const cartCtx = useContext(ContextCart);
  const price = `${props.price.toFixed(2)}`;
  const addToCartHandler = (value) => {
    let mealOrder = {
      id: props.id,
      name: props.name,
      price: +props.price,
      amount: +value,
    };

    cartCtx.addItem(mealOrder);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};;
export default MealItem;
