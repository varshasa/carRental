import React from "react";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import Filter from "./Filter.tsx";
import CarList from "./CarList.tsx";
import BookingInfoPage from "./BookingInfoPage.tsx";

const Container: React.FC = () => {
  return (
    <div className="h-[calc(100vh-1rem)]  lg:grid grid-rows-[auto_1fr] gap-4 p-4 m-2">
      <div className="min-h-20 flex flex-row items-center justify-between">
        <Header />
      </div>

      <div className="md:flex lg:grid grid-cols-[5rem_30rem_1fr] gap-6 h-full">
        {/* <div className="grid grid-cols-[5rem_1fr] gap-2 h-full"> */}
        <div className="hidden lg:flex flex-col items-center justify-between  max-h-[calc(90vh-3rem)]">
          <Sidebar />
        </div>
        <div className="bg-gray-100 p-5 lg:flex rounded-3xl max-h-[calc(90vh-3rem)]">
          <Filter />
        </div>
        <div className="lg:flex flex-col items-center  max-h-[calc(90vh-3rem)]">
          <div className="flex justify-between bg-white gap-2 w-full px-7">
          <div className="text-xl lg:text-2xl">24 cars to rent</div>
          <div className="text-blue-400">view all</div>
          </div>
          <CarList />
          {/* <BookingInfoPage/> */}
        </div>
      </div>
    </div>
  );
};

export default Container;
