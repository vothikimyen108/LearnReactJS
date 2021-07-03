import { Fragment } from "react";
import Header from "./compoment/Layout/Hearder";
import Meals from "./compoment/Meals/Meals";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
};

export default App;
