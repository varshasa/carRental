import React from "react";
// import car from '../assets/car.jpeg'
interface CardProps {
  title: string;
  model: string;
  price: string;
  image: string;
  
}

const Card: React.FC<CardProps> = ({ title, model, price, image, isNew }) => {
  return (
    <div className="flex border rounded-lg shadow-md bg-white dark:bg-gray-800 p-3">
     
      <div className="w-1/3 h-28 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>

    
      <div className="flex flex-col flex-1 ml-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{model}</p>
        <p className="text-xl font-semibold mt-2">${price} / hour</p>
      </div>
    </div>
  );
};

export default Card;
