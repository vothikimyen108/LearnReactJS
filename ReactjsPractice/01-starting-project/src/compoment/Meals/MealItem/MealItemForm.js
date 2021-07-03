import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="anonymous"
        input={{
          id: "amout",
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
          step: 1,
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
