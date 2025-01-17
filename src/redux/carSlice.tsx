import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

interface CarState {
  selectedCar: Car | null;
}

const initialState: CarState = {
  selectedCar: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    selectCar(state, action: PayloadAction<Car>) {
      state.selectedCar = action.payload;
    },
  },
});

export const { selectCar } = carSlice.actions;
export default carSlice.reducer;
