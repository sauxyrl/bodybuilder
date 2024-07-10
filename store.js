
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import workoutReducer from './reducers/workoutReducer';
import nutritionReducer from './reducers/nutritionReducer';
import competitionReducer from './reducers/competitionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  workouts: workoutReducer,
  nutrition: nutritionReducer,
  competitions: competitionReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
