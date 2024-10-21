import { combineReducers } from '@reduxjs/toolkit';
import surveyReducer from './slices/surveySlice';

const rootReducer = combineReducers({
  survey: surveyReducer,
});

export default rootReducer;
