// rootReducer.ts
import { combineReducers } from 'redux';
import carReducer from './carReducer.tsx'; // Import your car reducer

const rootReducer = combineReducers({
  car: carReducer,  // Add the car reducer here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
