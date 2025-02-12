import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import dashboard from "./Image/dashboard.png";
import attendance from "./Image/attendance.png";
import leave from "./Image/leave.png";
import approval from "./Image/Approval.png";
import report from "./Image/HR_Report.png";
import setting from "./Image/General_Setting.png";
import payroll from "./Image/Payroll.png";
import shift from "./Image/shift.png";
import employee from "./Image/employee.png";
import management from "./Image/management.png";
import performance from "./Image/performance.png";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [selectedSub, setSelectedSub] = useState("");
  const [expandedItems, setExpandedItems] = useState({});

  // ✅ Fixed: Single "Attendance" menu & consistent submenu structure
  const menuItems = [
    { name: "Dashboard", icon: dashboard, path: "/" },
    { 
      name: "Attendance", icon: attendance, path: "/attendance", 
      subMenu: [
        { name: "My Attendance Report", path: "/attendance/report" },
        { name: "Attendance Summary", path: "/attendance/summary" },
        { name: "Approval Status Report", path: "/attendance/approvalstatus" },
        { name: "Online Punch", path: "/attendance/onlinepunch" },
        { name: "Long Term Loan", path: "/attendance/longtermloan" },
        { name: "Provident Fund Entry", path: "/attendance/provident-fund" },
        { name: "My Pay Slip", path: "/attendance/pay-slip" },
      ]
    },
    { 
      name: "Leave", icon: leave, path: "/leave", 
      subMenu: [
        { name: "Apply Entry", path: "/leave/entry" },
        { name: "Leave Balance", path: "/leave/balance" }
      ]
    },
    { name: "Approval", icon: approval, path: "/approval",
      subMenu: [
        {name:"HOD Approval", path:"/approval/hod_approval"},
        {name:"HR Approval", path:"approval/cod_approval"},
        {name:"COD Approval", path:"/approval/cod_approval"}
      ]
     },
    { name: "HR Report", icon: report, path: "/hrreport",
      subMenu:[
        {name:"HR Attendance Report", path:"/hrreport/hr_attendance_report"},
        {name:"HR Leave Balance", path:"/hrreport/hr_leave_balance"},
        {name:"Arrears Report", path:"/hrreport/arrears_report"},
        {name:"HR Entry Status", path:"/hrreport/hr_entry_status"},
        {name:"Leave Report", path:"/hrreport/leave_report"},
        {name:"Attendance Details Report", path:"/hrreport/attendance_deatil_report"},
      ]
     },
    { name: "General Setting", icon: setting, path: "/setting",
      subMenu:[
        {name:"Location", path:"/setting/location"},
        {name:"Setting Role", path:"/setting/security_role"},
        {name:"Gazetted Holiday", path:"/setting/gazetted_holiday"},
        {name:"Leave Entitlement", path:"/setting/leave_enttitlement"},
        {name:"Approval Policy", path:"setting/approval_policy"},
        {name:"Email Coinfiguration", path:"setting/email_configuration"}, 

          
      ]
    },
    { name: "Payroll", icon: payroll, path: "/payroll",subMenu:[
      {name:"Payroll Months", path:"/payroll/payroll_months"},
      {name:"Payroll Setup", path:"/payroll/payroll_setup"},
      {name:"Allowance Deduction Types", path:"/payroll/allowance_deduction_types"},
      {name:"Allowance Deduction", path:"/payroll/allowance_deduction"},
      {name:"Payroll Final Report", path:"/payroll/payroll_final_report"},
      {name:"Payroll Publish", path:"/payroll/payroll_publish"},
      {name:"Payroll Publish Report", path:"/payroll/payroll_publish_report"}
    ] },
    { name: "Shift Setup", icon: shift, path: "/shiftsetup",subMenu:[
      {name:"Create Shift", path:"/shiftsetup/create_shift"},
      {name:"Assign Shift Employee", path:"/shiftsetup/assign_shift_employee"},
    ] },
    { name: "Employee Management", icon: management, path: "/employeemanagement",subMenu:[
      {name:"Employee Info", path:"/employeemanagement/employee_info"},
      {name:"Department", path:"/employeemanagement/department"},
      {name:"Designation", path:"/employeemanagement/designation"},
    ] },
    { name: "Management", icon: employee, path: "/management" },
    { name: "Performance Management", icon: performance, path: "/performancemanagement" },
    { name: "Report", icon: report, path: "/report" }
  ];

  // ✅ Fix: Check both main and submenu items for active state
  useEffect(() => {
    const matchedItem = menuItems.find(item => item.path === location.pathname);
    if (matchedItem) setSelected(matchedItem.path);

    menuItems.forEach(item => {
      if (item.subMenu) {
        const matchedSub = item.subMenu.find(sub => sub.path === location.pathname);
        if (matchedSub) {
          setSelected(item.path); // Also highlight parent menu
          setSelectedSub(matchedSub.path);
          setExpandedItems(prev => ({ ...prev, [item.name]: true })); // Keep submenu expanded
        }
      }
    });
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setSelected(path);
    setSelectedSub("");
    navigate(path);
  };

  const handleSubNavigation = (parent, path) => {
    setSelected(parent);
    setSelectedSub(path);
    navigate(path);
  };

  const toggleDropdown = (name) => {
    setExpandedItems(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <footer className="flex flex-col overflow-hidden w-full h-screen bg-slate-700 text-white ">
      <div className="flex flex-col h-full text-gray-300">
        <h2 className="text-3xl ml-10 mt-3">HRIS Demo</h2>
        <ul className="flex flex-col list-none mt-8 ml-6 text-sm gap-1">
          {menuItems.map(item => (
            <li key={item.path} className="flex flex-col">
              {/* ✅ Fix: Handle main navigation */}
              <div
                className={`hover:text-white hover:bg-slate-600 py-1.5 pl-4 lg:pl-10 flex justify-between cursor-pointer 
                ${selected === item.path ? "text-white bg-slate-600 font-semibold" : ""}`}
                onClick={() => handleNavigation(item.path)}
              >
                <div className="w-full flex flex-row justify-between">
                  <div className="flex items-center">
                    <img src={item.icon} alt={item.name} className="h-4 w-4 mr-2.5" />
                    <p>{item.name}</p>
                  </div>
                  {item.subMenu && (
                    <div
                      className="pr-4 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents triggering handleNavigation
                        toggleDropdown(item.name);
                      }}
                    >
                      {expandedItems[item.name] ? <ChevronDown /> : <ChevronRight />}
                    </div>
                  )}
                </div>
              </div>

              {/* ✅ Fix: Handle submenu navigation properly */}
              {item.subMenu && expandedItems[item.name] && (
                <ul className="ml-10 mt-1 space-y-1">
                  {item.subMenu.map(subItem => (
                    <li
                      key={subItem.path}
                      className={`text-gray-400 hover:text-white py-1.5 pl-4 lg:pl-10  cursor-pointer 
                      ${selectedSub === subItem.path ? "text-white bg-slate-600 font-semibold" : ""}`}
                      onClick={() => handleSubNavigation(item.path, subItem.path)}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Sidebar;
