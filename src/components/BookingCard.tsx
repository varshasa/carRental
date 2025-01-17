// import React from 'react'
// import { useSelector } from "react-redux";

// const BookingCard : React.FC= () => {

//   const selectedCar = useSelector((state: any) => state.selectedCar);

//   if (!selectedCar) {
//     return <div className="text-center">Please select a car to view details</div>;
//   }
//   return (
//     <div>
//           <div className="flex border rounded-lg shadow-md bg-white dark:bg-gray-800 p-3">
//           <div className="w-full h-[75%] flex-shrink-0">
//           <img
//         src={selectedCar.image}
//         alt={selectedCar.make}
//         className="w-full h-64 object-cover rounded-md mb-4"
//           />
//       <h2 className="text-2xl font-bold mb-2">{selectedCar.make} {selectedCar.model}</h2>
//       <p className="text-lg text-gray-700 mb-2">Price: ${selectedCar.price} / hour</p>
//       {selectedCar.isNew && (
//         <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//           New
//         </span>
//       )}  
//       </div>  
//     </div>
//     </div>
//   )
// }

// export default BookingCard ;



// src/components/CarBookingCard.jsx
import React from "react";

const BookingCard = ({ car }) => {
  return (
    <div className="max-w-sm border rounded-lg shadow-md bg-white">
      {/* Image Section */}
      <div className="relative">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2 flex space-x-2">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Available
          </span>
        </div>
        <button className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2">
          ❤️
        </button>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{car.brand}</h3>
        <p className="text-sm text-gray-500">{car.name}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400 text-sm">⭐</span>
          <span className="ml-1 text-sm font-semibold">{car.rating}</span>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Car Details */}
        <div className="space-y-2">
          <p>
            <strong>Year:</strong> {car.year}
          </p>
          <p>
            <strong>Type:</strong> {car.type}
          </p>
          <p>
            <strong>Color:</strong> {car.color}
          </p>
          <p>
            <strong>Rental Type:</strong> {car.rentalType}
          </p>
          <p>
            <strong>Car Insurance:</strong> {car.insurance}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold">${car.price.toFixed(2)}/hour</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
