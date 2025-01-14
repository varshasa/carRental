import React from 'react'
import CarDetails from './CarDetails.tsx'
import RentalDetails from './RentalDetails.tsx'


const BookingInfoPage:React.FC = () => {
  return (
    <div className=" w-[calc(100%-2rem)] flex h-[calc(100%-1rem)] justify-center items-center justify-around gap-8 p-4">
      <div className="w-[50%] h-full">
      <div className="flex justify-between p-4">
       <div className="text-lg">&#8592; Booking Car</div>
       <div className="text-lg">$23.30<span className="text-xs">/hour</span></div>
      </div>
        <CarDetails/>
      </div>
      <div className="bg-black w-[50%] h-full rounded-xl">
        <RentalDetails/>
      </div>
    </div>
  )
}

export default BookingInfoPage
