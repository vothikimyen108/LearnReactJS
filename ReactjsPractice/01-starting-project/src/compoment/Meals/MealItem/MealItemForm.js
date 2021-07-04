import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import React, { useState } from "react";

const MealsItemForm = (props) => {
  const [inputValue,setInputValue] = useState(+1);
  const handerSubmit = (event) => {
    event.preventDefault();
    const enteredAmountNumber = +inputValue;
    props.onAddToCart(enteredAmountNumber);
  };
  const handerChangeInput = (event) => {
    setInputValue(+(event.target.value));
  };
  return (
    <form className={classes.form} onSubmit={handerSubmit}>
      <Input
        label="Amount"
        onChange= {handerChangeInput}
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
         
        }  }
      />
      <button >+ Add</button>
    </form>
  );
};

export default MealsItemForm;
