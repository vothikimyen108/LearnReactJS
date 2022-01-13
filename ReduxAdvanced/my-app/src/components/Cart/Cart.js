import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };
  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const showCart = () => {
    if (cartItems.length > 0) {
      return (
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              onAdd={addItemHandler.bind(null, item)}
              onRemove={removeItemHandler.bind(null, item.id)}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      );
    } else {
      return <h2>Not item in cart</h2>;
    }
  };
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {showCart()}
    </Card>
  );
};

export default Cart;
