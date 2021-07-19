import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { uiSliceAction } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(uiSliceAction.togge());
  };
  const total = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
