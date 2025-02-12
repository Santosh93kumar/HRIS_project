import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, X } from 'lucide-react';

const LeaveEntryPopup = ({ isOpen, onClose, employeeName = "Ibad ur Rahman" }) => {
  const [leaveType, setLeaveType] = useState('');
  const [leavePeriod, setLeavePeriod] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const [dateError, setDateError] = useState('');

  // Predefined leave types
  const leaveTypes = [
    { value: "outdoor", label: "Outdoor Activity" },
    { value: "annual", label: "Annual Leave" },
    { value: "sick", label: "Sick Leave" },
    { value: "casual", label: "Casual Leave" },
    { value: "maternity", label: "Maternity Leave" },
    { value: "paternity", label: "Paternity Leave" },
    { value: "study", label: "Study Leave" },
    { value: "unpaid", label: "Unpaid Leave" },
    { value: "wfh", label: "Work From Home" }
  ];

  // Date validation and handling
  const validateDates = useCallback((start, end) => {
    if (!start || !end) return true;
    
    const startDate = new Date(start);
    const endDate = new Date(end);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (startDate < today) {
      setDateError("Start date cannot be in the past");
      return false;
    }
    if (endDate < startDate) {
      setDateError("End date cannot be before start date");
      return false;
    }
    setDateError('');
    return true;
  }, []);

  const handleFromDateChange = (e) => {
    const newFromDate = e.target.value;
    setFromDate(newFromDate);
    validateDates(newFromDate, toDate);
  };

  const handleToDateChange = (e) => {
    const newToDate = e.target.value;
    setToDate(newToDate);
    validateDates(fromDate, newToDate);
  };

  // Calculate minimum and maximum dates
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const handleSubmit = () => {
    if (!leaveType || !leavePeriod || !fromDate || !toDate) {
      alert("Please fill in all required fields");
      return;
    }

    if (!validateDates(fromDate, toDate)) {
      return;
    }

    const leaveData = {
      leaveType,
      leavePeriod,
      fromDate,
      toDate,
      remarks,
      employeeName
    };

    console.log('Submitting leave request:', leaveData);
    onClose();
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
    
      {/* Modal Container */}
      <div className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl">
        <div className="border border-gray-300 rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-[#D3D3D3]">
            <h2 id="modal-title" className="text-lg sm:text-xl font-semibold text-gray-800 break-words">
              Leave Entry of {employeeName}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition shrink-0 ml-2"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
    
          {/* Form Content */}
          <div className="p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Leave Type */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Leave Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Leave Type</option>
                  {leaveTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
    
              {/* Leave Period */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Leave Period <span className="text-red-500">*</span>
                </label>
                <select
                  value={leavePeriod}
                  onChange={(e) => setLeavePeriod(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Leave</option>
                  <option value="full">Full Day</option>
                  <option value="first_half">First Half</option>
                  <option value="second_half">Second Half</option>
                </select>
              </div>
    
              {/* From Date */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  From Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={handleFromDateChange}
                  min={today}
                  max={maxDateString}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
    
              {/* To Date */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  To Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={toDate}
                  onChange={handleToDateChange}
                  min={fromDate || today}
                  max={maxDateString}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
    
            {dateError && (
              <div className="text-red-500 text-sm">{dateError}</div>
            )}
    
            {/* Remarks */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Remarks
              </label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter your remarks here"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[100px]"
              />
            </div>
          </div>
    
          {/* Footer */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 p-4 sm:p-5">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={!leaveType || !leavePeriod || !fromDate || !toDate || dateError}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveEntryPopup;