import { createSlice } from "@reduxjs/toolkit";

const initialData = { userData: null, shopData: "1", landingPageData: "/", availableBalance:null };

export const counterSlice = createSlice({
  name: "userInfo",
  initialState: initialData,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload.data
    },

    setShopData: (state, action) => {
      state.shopData = action.payload
    },

    setAvailableBalance: (state, action) => {
      state.availableBalance = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, setShopData, setAvailableBalance } = counterSlice.actions;

export default counterSlice.reducer;
