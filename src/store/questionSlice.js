import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  welcome: false,
  test: true,
  completed: false,
  currentQuestionId: null,
  nextQuestionId: null,
  questionText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius doloremque nesciunt reiciendis voluptatem soluta!",
  counter: {
    allQuestionCounter: 10,
    currentQuestionCounter: 5,
  },
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    welcome: (state, action) => {
      state.welcome = action.payload;
      state.test = !state.welcome;
    },
  },
});

// Action creators are generated for each case reducer function
export const { welcome } = questionSlice.actions;

export default questionSlice.reducer;
