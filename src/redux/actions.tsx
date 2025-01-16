export const SELECT_CAR = "SELECT_CAR";

export const selectCar = (car: any) => {
  return {
    type: SELECT_CAR,
    payload: car,
  };
};
