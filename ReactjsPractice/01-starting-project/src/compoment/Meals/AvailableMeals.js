import classes from "./AvailableMeals.module.css";
import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    setLoaded(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://meal-7e0a4-default-rtdb.firebaseio.com/Meals.json",
      );
      //  nếu xẩy ra lỗi thì ném ra ngoại lệ mới
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setLoaded(false);
      setMeals(loadedMeals);
    };

    fetchMeals().catch((error) => {
      setLoaded(false);
      setHttpError(error.message);
    });
  }, []);
  //code loading
  if (loaded) {
    return (
      <section className={classes.meals}>
        <p>loading</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.meals}>
        <p>{httpError}aa</p>
      </section>
    );
  }
  const mealsList = meals.map((item) => {
    return (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      ></MealItem>
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
