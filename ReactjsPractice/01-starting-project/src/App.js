import { Fragment } from "react";
import Header from "./compoment/Layout/Hearder";
import Meals from "./compoment/Meals/Meals";
import "./App.css";
import ContextCartProvice from "./Context/ContextCartProvice";

const App = () => {
  return (
    <Fragment>
      <ContextCartProvice>
            <Header></Header>
      <Meals></Meals>
      </ContextCartProvice>
  
    </Fragment>
  );
};

export default App;
