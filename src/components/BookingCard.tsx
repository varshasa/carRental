import React from 'react'
import { useSelector } from "react-redux";

const BookingCard : React.FC= () => {

  const selectedCar = useSelector((state: any) => state.selectedCar);

  if (!selectedCar) {
    return <div className="text-center">Please select a car to view details</div>;
  }
  return (
    <div>
          <div className="flex border rounded-lg shadow-md bg-white dark:bg-gray-800 p-3">
          <div className="w-full h-[75%] flex-shrink-0">
          <img
        src={selectedCar.image}
        alt={selectedCar.make}
        className="w-full h-64 object-cover rounded-md mb-4"
          />
      <h2 className="text-2xl font-bold mb-2">{selectedCar.make} {selectedCar.model}</h2>
      <p className="text-lg text-gray-700 mb-2">Price: ${selectedCar.price} / hour</p>
      {selectedCar.isNew && (
        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          New
        </span>
      )}  
      </div>  
    </div>
    </div>
  )
}

export default BookingCard ;
