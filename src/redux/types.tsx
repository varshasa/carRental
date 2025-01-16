
export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    price: number;
    description: string;
  }
  
  export interface CarState {
    cars: Car[];
    selectedCar: Car | null;
    filter: Record<string, any>;
  }
  