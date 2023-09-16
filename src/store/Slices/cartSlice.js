import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Tours: JSON.parse(localStorage.getItem("cart-list")) || []
  },
  reducers: {
    addToCart: (state, action) => {
      state.Tours.push({ id: action.payload.id, count: action.payload.count });
      localStorage.setItem("cart-list", JSON.stringify(state.Tours))
    },

    plusCart: (state, action) => {
      var update = [...current(state.Tours)];
      update.forEach((element, i) => {
        if (element.id == action.payload.id) {
          
          var updeteIndex = { id: element.id, count: element.count + 1 };
          update[i]=updeteIndex
          state.Tours = update;
          localStorage.setItem("cart-list", JSON.stringify(state.Tours));
          return;
        }
      });
    },

    minusCart: (state, action) => {
      var update = [...current(state.Tours)];
      update.forEach((element, i) => {
        if (element.id == action.payload.id) {
          
          var updeteIndex = { id: element.id, count: element.count - 1 };
          update[i]=updeteIndex
          state.Tours = update;
          localStorage.setItem("cart-list", JSON.stringify(state.Tours));
          return;
        }
      });
    },

    removeFromCart: (state, action) => {
      state.Tours = state.Tours.filter((x) => x.id !== action.payload.id);
      localStorage.setItem("cart-list", JSON.stringify(state.Tours))
    },
  },
});

export const { minusCart, plusCart, removeFromCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;