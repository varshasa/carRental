import React from 'react'
interface CardProps {
  make: string;
  image: string;
  
}
const BookingCard : React.FC<CardProps>= (image,make) => {
  return (
    <div>
          <div className="flex border rounded-lg shadow-md bg-white dark:bg-gray-800 p-3">
          <div className="w-full h-[75%] flex-shrink-0">
        <img src={image} alt={make} className="w-full h-full object-cover rounded-md" />
        </div>  
          </div>
    </div>
  )
}

export default BookingCard
