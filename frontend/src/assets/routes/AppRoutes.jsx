import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/common/Home";
import About from "../../pages/common/About";
import Features from "../../pages/common/Features";
import NotFound from "../../pages/common/NotFound";

import GuideDashboard from "../../pages/guide/GuideDashboard";
import Login from "../../pages/auth/Login";
import Alerts from "../../pages/guide/Alerts";
import GroupManagement from "../../pages/guide/GroupManagement";
import MemberDetails from "../../pages/guide/MemberDetails";
import TeamAnalytics from "../../pages/guide/TeamAnalytics";
import Reports from "../../pages/guide/Reports";
import AISummary from "../../pages/guide/AISummary";

import StudentDashboard from "../../pages/student/StudentDashboard";
import Groups from "../../pages/student/Groups";
import GroupDetails from "../../pages/student/GroupDetails";  
import Performance from "../../pages/student/Performance";
import Notifications from "../../pages/student/Notifications";
import Profile from "../../pages/student/Profile";
import Settings from "../../pages/student/Settings";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features/>} />
        <Route path="*" element={<NotFound />} />


        
        <Route path="/login" element={<Login />} />

        // Guide routes
        <Route path="/guide-dashboard" element={<GuideDashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/group-management" element={<GroupManagement />} />
        <Route path="/member-details" element={<MemberDetails />} />
        <Route path="/team-analytics" element={<TeamAnalytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/ai-summary" element={<AISummary />} />

        // Student routes 
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/group-details" element={<GroupDetails />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;