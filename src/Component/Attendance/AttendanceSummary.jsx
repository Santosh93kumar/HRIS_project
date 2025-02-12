import React from "react";
import { useState } from "react";

export default function AttendanceSummary() {
  const [showTable, setShowTable] = useState(false);

  const handleShow = () => {
    setShowTable(true);
  };

  return (
    <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <div className="pt-4 pb-3 pr-8 pl-3">
        <div className="flex items-start mb-3 font-medium text-base">
          <h1 className="pl-1">Attendance Summary Report</h1>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-5 bg-white rounded-lg p-3 items-center">
          <select className="p-1 border rounded w-1/6">
            <option>Select Employee</option>
            <option>Saria Khan</option>
            <option>Hussan Khan</option>
            <option>Ibad ur Rahman</option>
            <option>Nadeem ur Rahman</option>
            <option></option>
          </select>
          <input
            type="date"
            name="From Date"
            className="p-1 border rounded w-1/6"
          />
          <input type="date" className="p-1 border rounded w-1/6" />
          <div className="flex-grow"></div>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={handleShow}
          >
            Show
          </button>
        </div>

        {/* Tables  */}
        {showTable && (
          <>
            {/* Day Deduction Summary */}
            <div className="mb-3">
              <h3 className="p-1 font-semibold text-base mb-1 mt-7 text-gray-800">
                Day Deduction Summary
              </h3>
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-1 px-3">Name</th>
                    <th className="py-1 px-3">Joining Date</th>
                    <th className="py-1 px-3">Separation Date</th>
                    <th className="py-1 px-3">Days Before Joining</th>
                    <th className="py-1 px-3">Days after Separation</th>
                    <th className="py-1 px-3">Absent Days</th>
                    <th className="py-1 px-3">Unpaid Leaves</th>
                    <th className="py-1 px-3">Suspension Days</th>
                    <th className="py-1 px-3">Days to be Deducted</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-2 py-5 border border-gray-200">
                      Ibad ur Rahman
                    </td>
                    <td className="px-2 py-5 border border-gray-200">
                      02-01-2019
                    </td>
                    <td className="px-2 py-5 border border-gray-200">
                      01-01-2024
                    </td>
                    <td className="px-2 py-5 border border-gray-200">0</td>
                    <td className="px-2 py-5 border border-gray-200">0</td>
                    <td className="px-2 py-5 border border-gray-200">5</td>
                    <td className="px-2 py-5 border border-gray-200">0</td>
                    <td className="px-2 py-5 border border-gray-200">0</td>
                    <td className="px-2 py-5 border border-gray-200">5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Time Deduction Summary */}
            <div className="mb-3">
              <h3 className="p-1 font-semibold text-base mb-1 mt-7 text-gray-800">
                Time Deduction Summary
              </h3>
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-1 px-3">Late Coming</th>
                    <th className="py-1 px-3">Entry Going</th>
                    <th className="py-1 px-3">Late Exemption</th>
                    <th className="py-1 px-3">Early Exemption</th>
                    <th className="py-1 px-3">Late Deduction</th>
                    <th className="py-1 px-3">Early Deduction</th>
                    <th className="py-1 px-3">Time Deduction</th>
                    <th className="py-1 px-3">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">
                      11:20
                    </td>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">
                      103:53
                    </td>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">
                      5:10
                    </td>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">
                      2:35
                    </td>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">
                      8:33
                    </td>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">
                      102:47
                    </td>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">0</td>
                    <td className="px-2 pt-5 pb-1 border border-gray-200">
                      10 Times Late <br />
                      6.0 Late Than 60
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Attendance Details */}
            <div className="mb-3">
              <h3 className="p-1 font-semibold text-base mb-1 mt-7 text-gray-800">
                Attendance Details
              </h3>
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">IN</th>
                    <th className="p-3">OUT</th>
                    <th className="p-3">Late</th>
                    <th className="p-3">Early</th>
                    <th className="p-3">Holiday Gazette</th>
                    <th className="p-3">Late Sitting Amount</th>
                    <th className="p-3">Leave Name</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <tr
                        key={i}
                        className={i === 0 ? "bg-sky-200 border-0" : ""}
                      >
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          Ibad ur Rahman
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          01-01-2023
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          9:00 AM
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          5:32 PM
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          0
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          0
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          0
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200">
                          0
                        </td>
                        <td className="px-2 pt-5 pb-1 border-r border-gray-200"></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
