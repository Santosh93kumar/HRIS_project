import React from "react";
import Header from "../Header";
import { useState } from "react";
import Delete from "./images/delete1.png";
import Edit from "./images/edit1.png";

function CreateShift() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        <Header />

        <section className="pt-4 pb-3 pr-8 pl-3 overflow-hidden">
          <div className="flex items-start mb-3 font-medium text-base">
            <h1 className="text-black pl-1">Master Shift Setup</h1>
          </div>
          {/* 1st Container */}
          <div className="flex flex-col md:flex-row gap-3 mb-8 bg-white rounded-lg p-3 items-center overflow-hidden">
            <input
              type="text"
              className="px-2 py-1 border rounded w-full md:w-1/2"
              placeholder="ID"
            />
            <div className="flex-grow"></div>
            <button className="bg-sky-500 text-white px-3 py-1 rounded w-full md:w-auto">
              Show
            </button>
            <button className="bg-teal-700 text-white px-3 py-1 rounded w-full md:w-auto mt-2 md:mt-0 md:mr-2">
              Add New
            </button>
          </div>
          {/* Flex Table */}
          <div className="bg-white shadow-md rounded overflow-x-auto justify-center mt-8 p-4 h-full overflow-hidden text-neutral-700 font-medium">
            <h2 className="font-medium pb-4">Master Shift</h2>
            <div className="flex flex-col mr-5 overflow-hidden">
              <div className="flex bg-gray-300 font-medium rounded justify-center py-2 overflow-hidden">
                <div className="p-2 flex-[0.5]">Edit</div>
                <div className="p-2 flex-[0.5]">Delete</div>
                <div className="p-2 flex-1">Name</div>
                <div className="p-2 flex-1">Shift_IN</div>
                <div className="p-2 flex-1">Shift_OUT</div>
                <div className="p-2 flex-1">Late Daily</div>
                <div className="p-2 flex-1">Early Daily</div>
                <div className="p-2 flex-[1.5]">Over Time Daily</div>
                <div className="p-2 flex-2">Working Days</div>
                <div className="p-2 flex-1">Late Sitting</div>
              </div>
              <div className="flex flex-col md:flex-row my-3 items-stretch h-full overflow-hidden bg-sky-200">
                <div className="p-2 md:p-1 lg:p-1 flex-1 ml-4 md:ml-1">
                  <img src={Edit} alt="Edit" width="24" height="24" />
                </div>
                <div className="p-2 md:p-1 lg:p-1 flex-1 ml-4 md:ml-1">
                  <img src={Delete} alt="Delete" width="16" height="18" />
                </div>
                <div className="p-2 flex-1">Overnights Shifts</div>
                <div className="p-2 flex-1">10:00 PM</div>
                <div className="p-2 flex-1">6:00 AM</div>
                <div className="p-2 flex-1">10</div>
                <div className="p-2 flex-1">0</div>
                <div className="p-2 flex-[1.5]">0</div>
                <div className="p-2 flex-2">Mo, Tu, We, Th, Fr, Sa</div>
                <div className="p-2 flex-1">0</div>
              </div>
              <div className="flex flex-col md:flex-row my-3 divide-y md:divide-y-0 md:divide-x-2 divide-gray-300 items-stretch h-full overflow-hidden">
                <div className="px-2 py-1 mt-2 flex-[0.5]">
                  <EditIcon />
                </div>
                <div className="px-3 py-1 flex-[0.5] mt-2">
                  <DeleteIcon />
                </div>
                <div className="p-2 flex-1">Shift-1</div>
                <div className="p-2 flex-1">9:00 AM</div>
                <div className="p-2 flex-1">5:30 PM</div>
                <div className="p-2 flex-1">15</div>
                <div className="p-2 flex-1">0</div>
                <div className="p-2 flex-[1.5]">0</div>
                <div className="p-2 flex-2">Mo, Tu, We, Th, Fr, Sa, Su</div>
                <div className="p-2 flex-1">90</div>
              </div>
            </div>
          </div>
        </section>

        {/* Popup Component */}
        <ShiftPop isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
      </section>
    </>
  );
}

export default CreateShift;
