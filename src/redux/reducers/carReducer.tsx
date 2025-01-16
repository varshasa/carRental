import { SELECT_CAR } from "../actions.tsx";

const initialState = {
  selectedCar: null,
};

const carReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SELECT_CAR':
      return { ...state, selectedCar: action.payload };
    default:
      return state;
  }
};

export default carReducer;
