// reducer.ts
import { Car, CarActionTypes, SELECT_CAR} from '../types.tsx';

interface CarState {
  selectedCar: Car | null;
}

const initialState: CarState = {
  selectedCar: null, // Default to null
};

const carReducer = (state = initialState, action: CarActionTypes): CarState => {
  switch (action.type) {
    case SELECT_CAR:
      return {
        ...state,
        selectedCar: action.payload, // The car will be added here
      };
    default:
      return state;
  }
};

export default carReducer;
