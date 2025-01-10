import React from "react";
import Header from  "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import Filter from "./Filter.tsx" ;
import CarList from "./CarList.tsx"

const Container: React.FC = () => {
  return (
    <div className="h-[calc(100vh-1rem)]  grid grid-rows-[auto_1fr] gap-4 p-4 m-2">
      <div className="min-h-20 flex flex-row items-center justify-between">
        <Header/>
      </div>

      <div className="grid grid-cols-[5rem_30rem_1fr] gap-2 h-full">
      <div className="flex flex-col items-center justify-between">
        <Sidebar/>
      </div>
      <div className="bg-gray-200 flex items-center justify-center rounded-3xl">
        <Filter/>
      </div>
      <div className="bg-yellow-200 flex items-center justify-center">
        <CarList/>
      </div>
      </div>
    </div>
  );
};

export default Container;
