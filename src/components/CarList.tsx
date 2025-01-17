// import React from "react";
// import {useDispatch} from 'react-redux' ;
// import Card from "./Card.tsx";
// import { selectCar} from "../redux/actions.tsx"; 

import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCar } from '../redux/carSlice.tsx';



  const cars = [
  {
      "id": 1,
      "make": "Toyota",
      "model": "Corolla",
      "year": 2022,
      "color": "Silver",
      "mileage": 20000,
      "price": 25000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 169,
      "features": [
          "Bluetooth",
          "Backup Camera",
          "Keyless Entry"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
      "id": 2,
      "make": "Honda",
      "model": "Civic",
      "year": 2021,
      "color": "White",
      "mileage": 18000,
      "price": 22000,
      "fuelType": "Gasoline",
      "transmission": "CVT",
      "engine": "1.5L 4-cylinder",
      "horsepower": 158,
      "features": [
          "Apple CarPlay",
          "Android Auto",
          "Lane Departure Warning"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
      "id": 3,
      "make": "Ford",
      "model": "Mustang",
      "year": 2020,
      "color": "Red",
      "mileage": 15000,
      "price": 35000,
      "fuelType": "Gasoline",
      "transmission": "Manual",
      "engine": "5.0L V8",
      "horsepower": 450,
      "features": [
          "Leather Seats",
          "Navigation System",
          "Heated Seats"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ff0000"
  },
  {
      "id": 4,
      "make": "Chevrolet",
      "model": "Equinox",
      "year": 2019,
      "color": "Blue",
      "mileage": 30000,
      "price": 20000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "1.5L 4-cylinder",
      "horsepower": 170,
      "features": [
          "Rearview Camera",
          "Blind-Spot Monitoring",
          "Wi-Fi Hotspot"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/0000ff"
  },
  {
      "id": 5,
      "make": "Nissan",
      "model": "Altima",
      "year": 2020,
      "color": "Black",
      "mileage": 22000,
      "price": 21000,
      "fuelType": "Gasoline",
      "transmission": "CVT",
      "engine": "2.5L 4-cylinder",
      "horsepower": 188,
      "features": [
          "Remote Start",
          "Automatic Emergency Braking",
          "Lane Keeping Assist"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/000000"
  },
  {
      "id": 6,
      "make": "BMW",
      "model": "3 Series",
      "year": 2021,
      "color": "White",
      "mileage": 12000,
      "price": 40000,
      "fuelType": "Diesel",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 255,
      "features": [
          "Sunroof",
          "Adaptive Cruise Control",
          "Parking Assistance"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
      "id": 7,
      "make": "Tesla",
      "model": "Model 3",
      "year": 2022,
      "color": "Red",
      "mileage": 8000,
      "price": 45000,
      "fuelType": "Electric",
      "transmission": "Automatic",
      "engine": "Electric Motor",
      "horsepower": 322,
      "features": [
          "Autopilot",
          "Full Self-Driving Capability",
          "Premium Audio System"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ff0000"
  },
  {
      "id": 8,
      "make": "Audi",
      "model": "Q5",
      "year": 2021,
      "color": "Gray",
      "mileage": 15000,
      "price": 38000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 248,
      "features": [
          "Virtual Cockpit",
          "Panoramic Sunroof",
          "Apple CarPlay"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/808080"
  },
  {
      "id": 9,
      "make": "Mercedes-Benz",
      "model": "E-Class",
      "year": 2020,
      "color": "Silver",
      "mileage": 18000,
      "price": 42000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 255,
      "features": [
          "MBUX Infotainment",
          "Heated Steering Wheel",
          "Air Suspension"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
      "id": 10,
      "make": "Chevrolet",
      "model": "Tahoe",
      "year": 2020,
      "color": "Black",
      "mileage": 25000,
      "price": 45000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "5.3L V8",
      "horsepower": 355,
      "features": [
          "Leather Seats",
          "Third-Row Seating",
          "Power Liftgate"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/000000"
  },
  {
      "id": 11,
      "make": "Subaru",
      "model": "Outback",
      "year": 2021,
      "color": "Green",
      "mileage": 12000,
      "price": 32000,
      "fuelType": "Gasoline",
      "transmission": "CVT",
      "engine": "2.5L 4-cylinder",
      "horsepower": 182,
      "features": [
          "All-Wheel Drive",
          "Roof Rails",
          "Adaptive Cruise Control"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/008000"
  },
  {
      "id": 12,
      "make": "Lexus",
      "model": "RX 350",
      "year": 2022,
      "color": "White",
      "mileage": 8000,
      "price": 48000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "3.5L V6",
      "horsepower": 295,
      "features": [
          "Premium Leather Seats",
          "Panoramic Sunroof",
          "Mark Levinson Audio"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
      "id": 13,
      "make": "Ford",
      "model": "F-150",
      "year": 2020,
      "color": "Blue",
      "mileage": 18000,
      "price": 38000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "3.5L V6",
      "horsepower": 375,
      "features": [
          "Towing Package",
          "Off-Road Package",
          "Sync 3 Infotainment"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/0000ff"
  },
  {
      "id": 14,
      "make": "BMW",
      "model": "X5",
      "year": 2021,
      "color": "Black",
      "mileage": 14000,
      "price": 55000,
      "fuelType": "Diesel",
      "transmission": "Automatic",
      "engine": "3.0L 6-cylinder",
      "horsepower": 335,
      "features": [
          "Heated Seats",
          "Wireless Charging",
          "Gesture Control"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/000000"
  },
  {
      "id": 15,
      "make": "Honda",
      "model": "CR-V",
      "year": 2019,
      "color": "Silver",
      "mileage": 25000,
      "price": 26000,
      "fuelType": "Gasoline",
      "transmission": "CVT",
      "engine": "1.5L 4-cylinder",
      "horsepower": 190,
      "features": [
          "Adaptive Cruise Control",
          "Lane Keeping Assist",
          "Apple CarPlay"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
      "id": 16,
      "make": "Toyota",
      "model": "RAV4",
      "year": 2020,
      "color": "White",
      "mileage": 18000,
      "price": 29000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.5L 4-cylinder",
      "horsepower": 203,
      "features": [
          "Blind-Spot Monitoring",
          "Rear Cross-Traffic Alert",
          "Apple CarPlay"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
      "id": 17,
      "make": "Tesla",
      "model": "Model Y",
      "year": 2022,
      "color": "Red",
      "mileage": 8000,
      "price": 52000,
      "fuelType": "Electric",
      "transmission": "Automatic",
      "engine": "Dual Electric Motors",
      "horsepower": 384,
      "features": [
          "Autopilot",
          "Premium Interior",
          "Panoramic Roof"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ff0000"
  },
  {
      "id": 18,
      "make": "Chevrolet",
      "model": "Silverado",
      "year": 2019,
      "color": "Black",
      "mileage": 25000,
      "price": 35000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "5.3L V8",
      "horsepower": 355,
      "features": [
          "Towing Package",
          "Trailer Brake Controller",
          "Apple CarPlay"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/000000"
  },
  {
      "id": 19,
      "make": "Ford",
      "model": "Escape",
      "year": 2021,
      "color": "Gray",
      "mileage": 12000,
      "price": 28000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "1.5L 4-cylinder",
      "horsepower": 181,
      "features": [
          "Apple CarPlay",
          "Android Auto",
          "Blind-Spot Monitoring"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/808080"
  },
  {
      "id": 20,
      "make": "Mercedes-Benz",
      "model": "GLE 350",
      "year": 2020,
      "color": "Silver",
      "mileage": 18000,
      "price": 46000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 255,
      "features": [
          "MBUX Infotainment",
          "Panoramic Sunroof",
          "Adaptive Cruise Control"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
      "id": 21,
      "make": "BMW",
      "model": "4 Series",
      "year": 2021,
      "color": "Blue",
      "mileage": 10000,
      "price": 48000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 255,
      "features": [
          "Head-Up Display",
          "Wireless Charging",
          "Parking Assistance"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/0000ff"
  },
  {
      "id": 22,
      "make": "Honda",
      "model": "Accord",
      "year": 2022,
      "color": "Black",
      "mileage": 8000,
      "price": 31000,
      "fuelType": "Gasoline",
      "transmission": "CVT",
      "engine": "1.5L 4-cylinder",
      "horsepower": 192,
      "features": [
          "Honda Sensing Suite",
          "Remote Engine Start",
          "Wireless Phone Charger"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/000000"
  },
  {
      "id": 23,
      "make": "Jeep",
      "model": "Grand Cherokee",
      "year": 2021,
      "color": "White",
      "mileage": 10000,
      "price": 38000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "3.6L V6",
      "horsepower": 295,
      "features": [
          "4WD",
          "Uconnect Infotainment",
          "Heated Seats"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
      "id": 24,
      "make": "Toyota",
      "model": "Highlander",
      "year": 2020,
      "color": "Silver",
      "mileage": 20000,
      "price": 36000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "3.5L V6",
      "horsepower": 295,
      "features": [
          "Lane Departure Alert",
          "Third-Row Seating",
          "Smart Key System"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
      "id": 25,
      "make": "Ford",
      "model": "Explorer",
      "year": 2022,
      "color": "Blue",
      "mileage": 6000,
      "price": 42000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.3L 4-cylinder",
      "horsepower": 300,
      "features": [
          "SYNC 4 Infotainment",
          "Tri-Zone Climate Control",
          "Power Liftgate"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/0000ff"
  },
  {
      "id": 26,
      "make": "Chevrolet",
      "model": "Camaro",
      "year": 2021,
      "color": "Red",
      "mileage": 8000,
      "price": 40000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "6.2L V8",
      "horsepower": 455,
      "features": [
          "RS Package",
          "Wireless Apple CarPlay",
          "Bose Premium Audio"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ff0000"
  },
  {
      "id": 27,
      "make": "Audi",
      "model": "A4",
      "year": 2020,
      "color": "White",
      "mileage": 15000,
      "price": 36000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 201,
      "features": [
          "Virtual Cockpit",
          "Panoramic Sunroof",
          "Audi Pre Sense City"
      ],
      "owners": 2,
      "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
      "id": 28,
      "make": "Subaru",
      "model": "Forester",
      "year": 2022,
      "color": "Green",
      "mileage": 5000,
      "price": 32000,
      "fuelType": "Gasoline",
      "transmission": "CVT",
      "engine": "2.5L 4-cylinder",
      "horsepower": 182,
      "features": [
          "Subaru EyeSight",
          "X-Mode Terrain Selection",
          "Starlink Infotainment"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/008000"
  },
  {
      "id": 29,
      "make": "Ford",
      "model": "Fusion",
      "year": 2022,
      "color": "Silver",
      "mileage": 8000,
      "price": 30000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "2.0L 4-cylinder",
      "horsepower": 245,
      "features": [
          "Ford Co-Pilot360",
          "Adaptive Cruise Control",
          "Wireless Charging"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
      "id": 30,
      "make": "Kia",
      "model": "Telluride",
      "year": 2021,
      "color": "White",
      "mileage": 10000,
      "price": 38000,
      "fuelType": "Gasoline",
      "transmission": "Automatic",
      "engine": "3.8L V6",
      "horsepower": 291,
      "features": [
          "Kia Drive Wise",
          "UVO Link Infotainment",
          "Apple CarPlay"
      ],
      "owners": 1,
      "image": "https://fakeimg.pl/500x500/ffffff"
  }
]


// const CarList: React.FC = () => {
//     const dispatch = useDispatch();  
//     const handleSelectCar = (car:any) => {
//       dispatch(selectCar(car));
//     };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 overflow-y-scroll max-h-[calc(90vh-3rem)] w-full">
//       {cars.map((car) => (
//        <div key={car.id} onClick={() => handleSelectCar(car)}>
//           <Card
//             {...car}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;



const CarList: React.FC = () => {
  const dispatch = useDispatch();

  const handleSelectCar = (car: any) => {
    dispatch(selectCar(car));
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="card border rounded p-4 cursor-pointer"
          onClick={() => handleSelectCar(car)}
        >
          <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-bold">{car.make} {car.model}</h3>
          <p>{car.year}</p>
          <p>${car.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;
