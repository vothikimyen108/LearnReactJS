import { Fragment,useState } from "react";
import Header from "./compoment/Layout/Hearder";
import Meals from "./compoment/Meals/Meals";
import "./App.css";
import ContextCartProvice from "./Context/ContextCartProvice";
import Cart from "./compoment/Cart/Cart";
const App = () => {
  const [openCart, setOpenCart] = useState(false);
  const handerOnlick = () => {
    setOpenCart(true);
  };
  const handerClose = () => {
    setOpenCart(false);
  };
  return (
    <Fragment>
   
      <ContextCartProvice>   
         {openCart && <Cart onClose={handerClose}></Cart>}
            <Header onOpen={handerOnlick}></Header>
      <Meals></Meals>
      </ContextCartProvice>
  
    </Fragment>
  );
};

export default App;
