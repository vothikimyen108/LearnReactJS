import classes from "./AvailableMeals.module.css";
import React from "react";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((item) => {
    return <li>{item.name}</li>;
  });
  return (
    <section className={classes.meals}>
      <ul>{meals}</ul>
    </section>
  );
};
export default AvailableMeals;
