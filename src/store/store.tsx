import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  planNumber: 0,
  isItYear: false,
  InitialAdds: [],
  total: 0,
  itsFinished: false,
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
    isItFinished: (state) => {
      state.itsFinished = !state.itsFinished;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { setPlanNumber, planChecker, adds, isItFinished } =
  counterSlice.actions;

export default store;
