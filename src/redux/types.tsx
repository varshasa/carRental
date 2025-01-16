// types.ts
export interface Car {
  make: string;
  model: string;
  price: string;
  image: string;
  isNew: boolean;
}

export const SELECT_CAR = 'SELECT_CAR';

export interface SelectCarAction {
  type: typeof SELECT_CAR;
  payload: Car; // The payload should be the car object
}

export type CarActionTypes = SelectCarAction; // Union type if you have other actions
