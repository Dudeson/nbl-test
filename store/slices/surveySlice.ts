import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Answer {
  screenSlug: string;
  answer: string;
}

interface SurveyState {
  answers: Record<string, string>;
}

const initialState: SurveyState = {
  answers: {},
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveAnswer(state, action: PayloadAction<Answer>) {
      const { screenSlug, answer } = action.payload;
      state.answers[screenSlug] = answer;
    },
    resetSurvey(state) {
      state.answers = {};
    },
  },
});

export const { saveAnswer, resetSurvey } = surveySlice.actions;

export default surveySlice.reducer;
