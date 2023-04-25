import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  planNumber: 0,
  isItYear: false,
  InitialAdds: [],
  total: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPlanNumber: (state, action) => {
      state.planNumber = action.payload;
    },
    planChecker: (state) => {
      if (
        state.planNumber !== 9 &&
        state.planNumber !== 12 &&
        state.planNumber !== 15
      ) {
        state.isItYear = true;
      } else {
        state.isItYear = false;
      }
    },
    adds: (state, action) => {
      state.InitialAdds = [...state.InitialAdds, action.payload];
    },
  },
   if(action.type==='SET_STATE'){
    state.planNumber=action.payload.planNumber
   }

});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { setPlanNumber, planChecker, adds } = counterSlice.actions;

export default store;
