import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromptState {
  text: string;
}

const initialState: PromptState = {
  text: "",
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPrompt: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setPrompt } = promptSlice.actions;
export default promptSlice.reducer;
