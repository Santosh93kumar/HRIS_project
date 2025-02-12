

import React, { useState } from 'react';
// import MissingTimePopup from './MissingTimePopup';

const AttendanceSummary = () => {
    // State management
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [fromDate, setFromDate] = useState('From Date');
    const [toDate, setToDate] = useState('');
    // const [attendanceData, setAttendanceData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Sample employee data
    const employees = [
        { id: 1, name: 'Saira Khan' },
        { id: 2, name: 'Hussan Khan' },
        { id: 3, name: 'Ibad ur Rahman' },
        { id: 4, name: 'Nadeem ur Rahman' },
        { id: 5, name: 'Mithali Ade' }
    ];

    // Handler for showing attendance data
    const handleShowAttendance = () => {
        if (!selectedEmployee || !fromDate || !toDate) {
            alert('Please select all required fields');
            return;
        }

        // // Simulated attendance data - in a real app, this would come from an API
        // const mockAttendanceData = {
        //     employee: selectedEmployee,
        //     period: `${fromDate} to ${toDate}`,
        //     summary: {
        //         present: 15,
        //         absent: 2,
        //         late: 3,
        //         total: 20
        //     }
        // };

        // setAttendanceData(mockAttendanceData);
    };


    return (
        <div className="flex flex-col w-full p-6 bg-blue-100 min-h-screen">
            <h2 className="text-lg font-semibold mb-4">Attendance Summary Report</h2>

            {/* Controls Section */}
            <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full md:w-1/4">
                    <select
                        className="border p-2 rounded w-full pl-8"
                        value={selectedEmployee}
                        onChange={(e) => setSelectedEmployee(e.target.value)}
                    >
                        <option value="">Select Employee</option>
                        {employees.map(emp => (
                            <option key={emp.id} value={emp.id}>
                                {emp.name}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="relative w-full md:w-1/4">

                    <input
                        type="date"
                        className="border p-2 rounded w-full pl-8"

                        data-placeholder='From Date'
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}

                    />

                </div>

                <div className="relative w-full md:w-1/4">
                    <input
                        type="date"
                        className="border p-2 rounded w-full pl-8"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}

                    />

                </div>

                <button
                    className="bg-blue-500 text-white p-2 rounded w-full md:w-1/6 hover:bg-blue-600 transition-colors"
                    onClick={handleShowAttendance}
                >
                    Show
                </button>
            </div>

            <div>
                {/* Button to trigger the popup */}
                {/* <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Missing Time Entry
                </button>

                <MissingTimePopup
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                /> */}
            </div>


        </div>

    );
};

export default AttendanceSummary;