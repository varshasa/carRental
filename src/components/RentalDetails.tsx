import React, { useState } from "react";

type RentalSummaryProps = {
  initialPickUpDate: string;
  initialPickUpTime: string;
  initialDropOffDate: string;
  initialDropOffTime: string;
  totalTime: string;
  price: number;
  taxes: number;
  insurance: number;
  onRentCar: () => void;
};

const RentalDetails: React.FC<RentalSummaryProps> = ({
  initialPickUpDate,
  initialPickUpTime,
  initialDropOffDate,
  initialDropOffTime,
  totalTime = 0,
  price = 0, 
  taxes = 0,
  insurance = 0,
  onRentCar,
}) => {
  const [pickUpDate, setPickUpDate] = useState(initialPickUpDate);
  const [pickUpTime, setPickUpTime] = useState(initialPickUpTime);
  const [dropOffDate, setDropOffDate] = useState(initialDropOffDate);
  const [dropOffTime, setDropOffTime] = useState(initialDropOffTime);

  const totalPrice = price + taxes + insurance;

  return (
    <div className="bg-black text-white p-6 rounded-lg max-w-full h-[calc(100%-3rem)] p-5 mx-auto flex flex-col gap-2 my-12">
      <div className="flex justify-between items-center mb-4 gap-2">
        <div className='p-6'>
          <label className="text-sm text-gray-400 block mb-3">
            Pick-up date and time
          </label>
          <div className="flex items-center gap-2 bg-gray-800 text-white rounded-2xl p-2 text-sm">
            <input
              type="date"
              value={pickUpDate}
              onChange={(e) => setPickUpDate(e.target.value)}
              className="bg-gray-800 text-white rounded-2xl p-2 text-sm"
            />
            <input
              type="time"
              value={pickUpTime}
              onChange={(e) => setPickUpTime(e.target.value)}
              className="bg-gray-800 text-white rounded-2xl p-2 text-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-3">
            Drop-off date and time
          </label>
          <div className="flex items-center gap-2 bg-gray-800 text-white rounded-2xl p-2 text-sm">
            <input
              type="date"
              value={dropOffDate}
              onChange={(e) => setDropOffDate(e.target.value)}
              className="bg-gray-800 text-white rounded-md p-2 text-sm"
            />
            <input
              type="time"
              value={dropOffTime}
              onChange={(e) => setDropOffTime(e.target.value)}
              className="bg-gray-800 text-white rounded-md p-2 text-sm"
            />
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col gap-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-400">Total time</span>
        <span className="font-medium">{totalTime} hours</span>
      </div>

      <div className="border-t border-gray-700"></div>

      <div className="flex justify-between mb-1">
        <span className="text-gray-400">Price</span>
        <span className="font-medium">${price.toFixed(2)}</span>
      </div>

      <div className="border-t border-gray-700"></div>

      <div className="flex justify-between mb-1">
        <span className="text-gray-400">Taxes</span>
        <span className="font-medium">${taxes.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-700"></div>

      <div className="flex justify-between mb-1">
        <span className="text-gray-400">Insurance</span>
        <span className="font-medium">${insurance.toFixed(2)}</span>
      </div>

      <div className="border-t border-gray-700 mb-8"></div>


      <div className="flex justify-between font-bold text-lg mb-4">
        <div>
        <span className="text-2xl">Total price </span>
        <span className="text-3xl">${totalPrice.toFixed(2)}</span>
        </div>
        <div>
        <button
        onClick={onRentCar}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-12 rounded-3xl"
      >
        Rent car
      </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RentalDetails;
