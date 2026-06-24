import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/common/Home";
import About from "../../pages/common/About";
import Features from "../../pages/common/Features";
import NotFound from "../../pages/common/NotFound";

import GuideDashboard from "../../pages/guide/GuideDashboard";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
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

import GroupChat from "../../components/chat/GroupChat";
import SingleChat from "../../components/chat/SingleChat";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        //common routes
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features/>} />
        <Route path="*" element={<NotFound />} />


        //Auth routes
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" elemtent={<VerifyOTP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        

        // Student routes 
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/group-details" element={<GroupDetails />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        //chat routes
        <Route path="/group-chat" element={<GroupChat />} />
        <Route path="/single-chat" element={<SingleChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;