import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "step",
  initialState: {
    currentStep: 1,
  },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { nextStep, prevStep, setStep } = stepSlice.actions;
export default stepSlice.reducer;
