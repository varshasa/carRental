// actions.ts
import { Car, SelectCarAction, SELECT_CAR } from './types.tsx';

export const selectCar = (car: Car): SelectCarAction => ({
  type: SELECT_CAR,
  payload: car,
});
