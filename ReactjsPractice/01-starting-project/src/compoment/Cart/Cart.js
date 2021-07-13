import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import ContextCart from "../../Context/ContextCart";
const Cart = (props) => {
  const ctxCart = useContext(ContextCart);
  const hasItems = ctxCart.items.length > 0; //true
  const cartItemAddHandler = (item) => {
    ctxCart.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (item) => {
    ctxCart.removeItem(item);
  };
  //   if (ctxCart.items.length > 0) sethasItems(true);
  //lấy giỏ hàng ra
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctxCart.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctxCart.totalAmount} $</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
