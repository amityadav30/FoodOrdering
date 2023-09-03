import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subTotal: 0,
    promotion: "",
    discount: 0,
  },
  reducers: {
    // here we denote, what action will call what reducer function
    //mapping bet action and function
    addItem: (state, action) => {
      // "REducer Function";
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If a similar object exists, increment the quantity attribute
        existingItem.quantity += 1;
      } else {
        // If it's a new object, add it to the items array with quantity 1
        newItem.quantity = 1;
        state.items.push(newItem);
      }
    },

    removeItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id == newItem.id);

      if (existingItem) {
        existingItem.quantity > 1
          ? (existingItem.quantity -= 1)
          : (state.items = state.items.filter(
              (item) => item.id != existingItem.id
            ));
      }
    },

    clearCart: (state) => {
      state.items = [];
    },

    mainTotal: (state, action) => {
      state.subTotal = action.payload;
    },

    mainPromotion: (state, action) => {
      state.promotion = action.payload;
    },

    mainDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const { addItem, removeItem, mainTotal, mainPromotion, mainDiscount } =
  cartSlice.actions;
export default cartSlice.reducer;

// Slice has a name, initialState, reducers
//
