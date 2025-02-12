import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import LeaveEntitlement from "./Component/GenrealSetting/LeaveEntitle";
import MyAttendanceReport from "./Component/Attendance/MyAttendanceReport";
import Attendance from "./Component/Attendance/Attendance";
import AttendanceSummary from "./Component/Attendance/AttendanceSummary";
import Onlinepunch from "./Component/Attendance/Onlinepunch";
import ApprovalStatus from "./Component/Attendance/ApprovalStatus";
import Longtermloan from "./Component/Attendance/Longtermloan";
import AttendanceLayout from "./Pages/AttendanceLayout";
import DashboardLayout from "./Pages/DashboardLayout";
import LeaveEntry from "./Component/Leave/LeaveEntry";
import LeaveLayout from "./Pages/LeaveLayout";
import LeaveBalance from "./Component/Leave/LeaveBalance";
import ApprovalLayout from "./Pages/ApprovalLayout";
import HrApproval from "./Component/Approval/HrApproval";
import HodApproval from "./Component/Approval/HodApproval";
import CODApproval from "./Component/Approval/CODApproval";
import HrReportLayout from "./Pages/HrReportLayout";
import Hrattendancereport from "./Component/hrreport/Hrattendancereport";
import HrLeaveBalance from "./Component/Hrreport/HrLeaveBalance";
import LeaveReport from "./Component/Hrreport/LeaveReport";
import HrEntryStatus from "./Component/Hrreport/HrEntryStatus";
import ArrearsReport from "./Component/Hrreport/ArrearsReport";
import AttendanceDetailReport from "./Component/Hrreport/AttendanceDetailReport";
import SettingLayout from "./Pages/SettingLayout";
import Location from "./Component/GenrealSetting/Location";
import SecurityRole from "./Component/GenrealSetting/SecurityRole";
import GazettedHoliday from "./Component/GenrealSetting/GazettedHoliday";
import LeaveEntitle from "./Component/GenrealSetting/LeaveEntitle";

import ApprovalPolicy from "./Component/GenrealSetting/ApprovalPolicy";
import EmailConfiguration from "./Component/GenrealSetting/EmailConfiguration";
import PayrollLayout from "./Pages/PayrollLayout";
import PayrollMonths from "./Component/Payroll/PayrollMonths";
import PayrollSetup from "./Component/Payroll/PayrollSetup";
import AllowanceDeductionTypes from "./Component/Payroll/AllowanceDeductionTypes";
import AllowanceDeduction from "./Component/Payroll/AllowanceDeduction";
import PayrollFinalReport from "./Component/Payroll/PayrollFinalReport";
import PayrollPublish from "./Component/Payroll/PayrollPublish";
import PayrollPublishedReport from "./Component/Payroll/PayrollPublishedReport";
import CreateShift from "./Component/Shiftsetup/CreateShift";
import ShiftLayout from "./Pages/ShiftLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
    },
    //attendance
    {
      path: "/attendance",
      element: <AttendanceLayout />,
      children: [
        {
          path: "/attendance",
          element: <Attendance />,
        },

        {
          path: "/attendance/report",
          element: <MyAttendanceReport />,
        },
        {
          path: "/attendance/summary",
          element: <AttendanceSummary />,
        },
        {
          path: "/attendance/approvalstatus",
          element: <ApprovalStatus />,
        },
        {
          path: "/attendance/onlinepunch",
          element: <Onlinepunch />,
        },
        {
          path: "/attendance/longtermloan",
          element: <Longtermloan />,
        },
        {
          path: "setting/leaveEnttitlement",
          element: <LeaveEntitlement />,
        },
      ],
    },
    //leave
    {
      path: "/leave",
      element: <LeaveLayout />,
      children: [
        {
          path: "/leave/entry",
          element: <LeaveEntry />,
        },
        {
          path: "/leave/balance",
          element: <LeaveBalance />,
        },
      ],
    },
    //Aproval
    {
      path: "/approval",
      element: <ApprovalLayout />,
      children: [
        {
          path: "/approval/hod_approval",
          element: <HodApproval />,
        },
        {
          path: "/approval/hr_approval",
          element: <HrApproval />,
        },
        {
          path: "/approval/cod_approval",
          element: <CODApproval />,
        },
      ],
    },

    //hrreport
    {
      path: "/hrreport",
      element: <HrReportLayout />,
      children: [
        {
          path: "/hrreport/hr_attendance_report",
          element: <Hrattendancereport />,
        },
        {
          path: "/hrreport/hr_leave_balance",
          element: <HrLeaveBalance />,
        },
        {
          path: "/hrreport/arrears_report",
          element: <ArrearsReport />,
        },
        {
          path: "/hrreport/hr_entry_status",
          element: <HrEntryStatus />,
        },
        {
          path: "/hrreport/leave_report",
          element: <LeaveReport />,
        },
        {
          path: "/hrreport/attendance_deatil_report",
          element: <AttendanceDetailReport />,
        },
      ],
    },
    {
      path: "/setting",
      element: <SettingLayout />,
      children: [
        {
          path: "/setting/location",
          element: <Location />,
        },
        {
          path: "/setting/security_role",
          element: <SecurityRole />,
        },
        {
          path: "/setting/leave_enttitlement",
          element: <LeaveEntitle />,
        },
        {
          path: "/setting/gazetted_holiday",
          element: <GazettedHoliday />,
        },
        {
          path: "setting/approval_policy",
          element: <ApprovalPolicy />,
        },
        {
          path: "setting/email_configuration",
          element: <EmailConfiguration />,
        },
      ],
    },
    {
      path: "/payroll",
      element: <PayrollLayout />,
      children: [
        {
          path: "/payroll/payroll_months",
          element: <PayrollMonths />,
        },
        {
          path: "/payroll/payroll_setup",
          element: <PayrollSetup />,
        },
        {
          path: "/payroll/allowance_deduction_types",
          element: <AllowanceDeductionTypes />,
        },
        {
          path: "/payroll/allowance_deduction",
          element: <AllowanceDeduction />,
        },
        {
          path: "/payroll/payroll_final_report",
          element: <PayrollFinalReport />,
        },
        {
          path: "/payroll/payroll_publish",
          element: <PayrollPublish />,
        },
        {
          path: "/payroll/payroll_publish_report",
          element: <PayrollPublishedReport />,
        },
      ],
    },
    {
      path: "/shiftsetup",
      element: <ShiftLayout />,
      children: [
        {
          path: "/shiftsetup/create_shift",
          element: <CreateShift />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
