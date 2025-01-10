import React from 'react'
import profile from "../assets/profile.png"
import location from "../assets/location.png"
const Header:React.FC = () => {
  return (
    <>
      <div className="m-4 text-2xl font-mono">StarCar+</div>
      <div className="m-5">
      <div className="bg-black rounded-3xl flex items-center h-10 gap-2 p-2 translate-x-1/2">
      <div className="text-black text-sm bg-gray-100 rounded-3xl p-2 ">Light mode</div>
      <div className="text-gray-100 text-sm p-3">Dark</div>
      </div>
      </div>
      <div className="m-5 flex gap-4 items-center">
        <div className="text-sm text-gray-400"><img className="w-5 inline mr-2" src={location}/>New York , US</div>
        <div className="text-sm"><img className="w-10 inline mr-2" src={profile}/>Nancy Holloway</div>
      </div>
    </>
  )
}

export default Header
