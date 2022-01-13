import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import ContextCart from "../../Context/ContextCart";
import Checkout from "./Checkout";
const Cart = (props) => {
  const ctxCart = useContext(ContextCart);
  const [isClickOrder, setISClickOrder] = useState(false);
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

  const orderHandler = () => {
    setISClickOrder(true);
  };
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  const submitOrderHandler = (userData) => {
    fetch("https://meal-7e0a4-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: ctxCart.items,
      }),
    });
  };
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctxCart.totalAmount} $</span>
      </div>
      {isClickOrder && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isClickOrder && modalActions}
    </Modal>
  );
};

export default Cart;
