import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  errors: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { setField, setErrors, resetForm } = formSlice.actions;
export default formSlice.reducer;
