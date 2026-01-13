import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupportedLangs } from "@/helpers/languages/langWords";

type FirstLangs = {
  uiLang: SupportedLangs;
  lang: SupportedLangs;
};

export interface initialStateIntroType {
  firstUsername: string | null;
  firstLangs: FirstLangs | null;
  langLevel: number | null;
  langReason: string | null;
  numberOfWords: number | null;
}

const initialState: initialStateIntroType = {
  firstUsername: null,
  firstLangs: null,
  langLevel: null,
  langReason: null,
  numberOfWords: null,
};

export const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    changeFirstUsername: (state, action: PayloadAction<string | null>) => {
      state.firstUsername = action.payload;
    },
    changeFirstLangs: (state, action: PayloadAction<FirstLangs | null>) => {
      state.firstLangs = action.payload;
    },
    changeLangLevel: (state, action: PayloadAction<number | null>) => {
      state.langLevel = action.payload;
    },
    changeLangReason: (state, action: PayloadAction<string | null>) => {
      state.langReason = action.payload;
    },
    changeFirstNumberOfWords: (state, action: PayloadAction<number | null>) => {
      state.numberOfWords = action.payload;
    },
  },
});

export const {
  changeFirstUsername,
  changeFirstLangs,
  changeLangLevel,
  changeLangReason,
  changeFirstNumberOfWords,
} = introSlice.actions;

export default introSlice.reducer;
