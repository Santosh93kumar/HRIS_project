import React from "react";
import Header from "../Header";
import showImage from "./images/show1.png";

function LeaveBalance() {
  return (
    <>
      <section className="bg-sky-100 flex flex-col w-full h-screen">
        <Header />

        <div className="pt-4 pb-3 pr-8 pl-3">
          <div className="flex items-start mb-3 font-medium text-base">
            <h1 className="pl-1">Leave Balance</h1>
          </div>

          {/* Toggle */}
          <div className="flex gap-3 mb-5 bg-white rounded-lg p-4 items-end">
            <input
              type="text"
              className="p-1 border rounded w-2/3 "
              placeholder="Enter your name"
            />
            <button className="ml-auto bg-sky-600 text-white px-3 py-1 rounded">
              Show
            </button>
            <img
              src={showImage}
              style={{ width: "20px", height: "24px" }}
              className="mb-1 bg-gray-200 rounded p-1"
              alt="Show"
            />
          </div>

          {/* Empty Toggle  */}
          <div className="flex h-15 mb-5 bg-white rounded-lg p-3 mt-10"></div>
        </div>
      </section>
    </>
  );
}

export default LeaveBalance;
