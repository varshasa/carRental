import React from 'react'
import BookingCard from './BookingCard.tsx'


const CarDetails:React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 flex flex-col">
     <div>
        <BookingCard/>
     </div>
     <div className="p-4">
     <p className="text-gray-400 text-2xl">Alfa Romeo</p>
     <div className="flex justify-between text-4xl">
      <div>Giulia Veloce</div>
      <div>5</div>
     </div>
     </div>
     <div className="p-4 flex flex-col gap-4">
     <div className="flex justify-between rounded-sm shadow-sm p-2">
      <div>Year</div>
      <div>2024</div>
     </div>
     <div className="flex justify-between rounded-sm shadow-sm p-2">
      <div>Type</div>
      <div>Sedan</div>
     </div>
     <div className="flex justify-between rounded-sm shadow-sm p-2">
      <div>Color</div>
      <div>Dark blue</div>
     </div>
     <div className="flex justify-between rounded-sm shadow-sm p-2">
      <div>Rental type</div>
      <div>Per hour</div>
     </div>
     <div className="flex justify-between rounded-sm shadow-sm p-2">
      <div>Car insurance</div>
      <div>Collision Damage Waiver</div>
     </div>
     </div>
    </div>
  )
}

export default CarDetails
