import { Fragment } from "react";
import Header from "./compoment/Layout/Hearder";
import MealsSummary from "./compoment/Meals/MealsSummary";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <MealsSummary></MealsSummary>
    </Fragment>
  );
};

export default App;
