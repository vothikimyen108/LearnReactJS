import React, { useState } from "react";
import ContextCart from "./ContextCart";

const ContextCartProvice = (props) => {
  const [items, setItem] = useState([]);
  //viết hàm tìm trong giỏ hàng có sản phẩm chưa
  const findItem = (id) => {
    return items.findIndex((item) => item.id === id);
  };
  const addItem = (item) => {
    setItem((preItem) => {
      console.log(items);
      if (findItem(item.id) < 0) {
        preItem.push(item);
        return [...preItem];
      } else {
        preItem[findItem(item.id)].amount =
          preItem[findItem(item.id)].amount + item.amount;
        return [...preItem];
      }
    });
  };
  //tính tổng tiền
  let totalAmount = +0;
  for (let i = 0; i < items.length; i++) {
    let tong = items[i].amount * items[i].price;

    totalAmount = tong.toFixed(2);
  }
  //remove
  const removeItem = (itemID) => {
    setItem((preItem) => {
      preItem[findItem(itemID)].amount -= 1;
      if (preItem[findItem(itemID)].amount === 0) {
        preItem = preItem.filter((item) => {
          return item.id !== preItem[findItem(itemID)].id;
        });
      }
      return [...preItem];
    });
  };
  return (
    <ContextCart.Provider
      value={{
        items: items,
        totalAmount: totalAmount,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </ContextCart.Provider>
  );
};
export default ContextCartProvice;

///cách này dùng reducer
// import { useReducer } from "react";

// import ContextCart from "./ContextCart";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;

//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id,
//     );
//     const existingCartItem = state.items[existingCartItemIndex];
//     let updatedItems;

//     if (existingCartItem) {
//       const updatedItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount + action.item.amount,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       updatedItems = state.items.concat(action.item);
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   if (action.type === "REMOVE") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.id,
//     );
//     const existingItem = state.items[existingCartItemIndex];
//     const updatedTotalAmount = state.totalAmount - existingItem.price;
//     let updatedItems;
//     if (existingItem.amount === 1) {
//       updatedItems = state.items.filter((item) => item.id !== action.id);
//     } else {
//       const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }

//   return defaultCartState;
// };

// const CartProvider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState,
//   );

//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({ type: "ADD", item: item });
//   };

//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE", id: id });
//   };

//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };

//   return (
//     <ContextCart.Provider value={cartContext}>
//       {props.children}
//     </ContextCart.Provider>
//   );
// };

// export default CartProvider;
