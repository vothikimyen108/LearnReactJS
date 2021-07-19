import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  //khởi tạo đầu vô
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    //hàm thêm sản phẩm
    addItemToCart(state, action) {
      const newItem = action.payload; //tạo một biến lấy item mới
      const existingItem = state.items.find((item) => item.id === newItem.id); //tìm item mới có trong cart k
      state.totalQuantity++; //tăng tổng số lượng cart
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    //hàm xóa sản phẩm
    removeItemFromCart(state, action) {
      const id = action.payload; //lấy id
      const existingItem = state.items.find((item) => item.id === id); //tìm item có id đó
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); //nếu có thì xóa
      } else {
        existingItem.quantity--; //nếu có o thì giảm
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
