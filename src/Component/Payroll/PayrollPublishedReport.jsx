import React, { useState } from 'react';
import icon from "../Payroll/Print.png";

const PayrollPublishedReport = () => {
  const [filters, setFilters] = useState({
    department: '',
    employee: '',
    year: '',
    month: '',
    reportType: ''
  });

  const [showPayroll, setShowPayroll] = useState(false);

  const payrollData = [
    { name: 'Saira', department: 'Finance', designation: 'Officer', totalDays: 31, payableDays: 31, noOfLate: 31, timeDeduction: '0.000000', lateDeduction: '0.00' },
    { name: 'Deepika', department: 'IT', designation: 'Officer', totalDays: 31, payableDays: 31, noOfLate: 1, timeDeduction: '0.000000', lateDeduction: '7.00' }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleShow = () => {
    setShowPayroll(true);
    console.log('Applying filters:', filters);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-5">
      <h1 className="text-2xl font-semibold mb-6">Payroll Monthly Published Report</h1>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-wrap gap-2 md:gap-4 justify-between w-full">
          
          {/* Left Side - Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full md:w-auto">
            {['department', ' Select employee', 'year', 'month', 'Summary Report'].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={filters[field]}
                onChange={handleFilterChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="border border-gray-400 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-40"
              />
            ))}
          </div>

          {/* Right Side - Show Button & Print Icon */}
          <div className="flex items-center gap-4 justify-end w-full md:w-auto">
            <button
              onClick={handleShow}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Show
            </button>
            <div className="cursor-pointer flex items-center justify-center">
              <img src={icon} alt="Print" className="w-10 h-10" />
            </div>
          </div>

        </div>
      </div>

      {/* Payroll History Section (Initially visible) */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-800">Payroll Monthly Published Report History</h2>

        {/* Payroll Section - Appears inside this div when Show is clicked */}
        {/* {showPayroll && (
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {['Name', 'Department', 'Designation', 'Total Days', 'Payable Days', 'No of Late', 'Time Deduction', 'Late Deduction'].map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payrollData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {Object.values(row).map((value, i) => (
                        <td key={i} className="px-6 py-4 whitespace-nowrap text-left">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default PayrollPublishedReport;




