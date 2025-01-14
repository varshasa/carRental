import React from "react";

const FilterSidebar: React.FC = () => {
  return (
    <div className="w-full grid">
      <div className="flex justify-between place-items-baseline">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <p className="text-md font-semibold mb-4 text-blue-400 cursor-pointer">Reset</p>
      </div>
     
      <div className="mb-6 flex gap-3">
        <select className="w-full h-11 p-3 border rounded-2xl bg-white dark:text-white">
          <option value="Alfa Romeo">Alfa Romeo</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
        </select>

        <select className="w-full h-11 p-3 border rounded-2xl bg-white text-gray-500">
          <option value="Car model">Car model</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
        </select>

      </div>

      <div className="mb-6">
        <p className="text-md font-medium text-black dark:text-gray-300 mb-2">Type</p>
        <div className="grid grid-cols-3 gap-4">
          {["Sedan", "Van", "Pickup", "Wagon", "Minivan", "Couple"].map((type) => (
            <label key={type} className="flex items-center fle space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-md text-gray-700 dark:text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>

     
      <div className="mb-6">
        <p className="text-md font-medium text-black dark:text-gray-300 mb-2">Color</p>
        <div className="grid grid-cols-3 gap-4">
          {["Black", "Silver", "Dark Blue", "White", "Grey", "Brown"].map((color) => (
            <label key={color} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-md text-gray-700 dark:text-gray-300">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-t-2 border-gray-300"/>

      <div className="mb-6">
        <p className="text-md font-medium text-black dark:text-gray-300 mb-2">Rental type</p>
        <div className="flex gap-4">
          {["Any", "Per Day", "Per Hour"].map((type) => (
            <label key={type} className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-blue-500">
              <span className="text-md text-gray-700 dark:text-gray-300 hover:text-white">{type}</span>
            </label>
          ))}
        </div>
      </div>

    
      <div>
        <p className="text-md font-medium text-black dark:text-gray-300 mb-2">Car insurance</p>
        <div className="flex gap-6">
          {["Collision Damage Waiver", "Roadside Plus"].map((insurance) => (
            <label key={insurance} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-md text-gray-700 dark:text-gray-300">{insurance}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
