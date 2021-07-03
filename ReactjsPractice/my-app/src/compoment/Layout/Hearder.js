import { Fragment } from "react";
import style from "./Hearder.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <Header className={style.Header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </Header>
      <div className={style["main-image"]}>
        <img src="../../Acsset/meals.jpg" alt="IMG"></img>
      </div>
    </Fragment>
  );
};
export default Header;
