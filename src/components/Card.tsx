import React from "react";
// import car from '../assets/car.jpeg'
interface CardProps {
  make: string;
  model: string;
  price: number;
  image: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ make, model, price, image ,onClick}) => {
  return (
    <div className="flex flex-col border rounded-lg shadow-md bg-white dark:bg-gray-800 p-3 h-56">
     
      <div className="w-full h-[75%] flex-shrink-0"  onClick={onClick}>
        <img src={image} alt={make} className="w-full h-full object-cover rounded-md" />
      </div>

    
      <div className="flex flex-1 ml-4 justify-between items-end">
        <div>
        <p className="text-sm text-gray-500">{model}</p>
        <h3 className="text-lg font-bold">{make}</h3>
        </div>
        <div>
        <p className="text-xl font-semibold mt-2">${price} / hour</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
