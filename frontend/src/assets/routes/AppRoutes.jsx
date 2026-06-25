import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/common/Home";
import About from "../../pages/common/About";
import Features from "../../pages/common/Features";
import NotFound from "../../pages/common/NotFound";

import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
import VerifyOTP from "../../pages/auth/VerifyOTP";
import ForgotPassword from "../../pages/auth/ForgotPassword";

import UploadFile from "../Components/fileSharing/UploadFile";
import SharedFiles from "../Components/fileSharing/SharedFiles";
import FileCard from "../Components/fileSharing/FileCard";
import FilePreview from "../Components/fileSharing/FilePreview";

import StudentDashboard from "../../pages/student/StudentDashboard";
import Groups from "../../pages/student/Groups";
import GroupDetails from "../../pages/student/GroupDetails";  
import Performance from "../../pages/student/Performance";
import Notifications from "../../pages/student/Notifications";
import Profile from "../../pages/student/Profile";
import Settings from "../../pages/student/Settings";

import GroupChat from "../Components/chat/GroupChat";
import SingleChat from "../Components/chat/SingleChat";


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
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        // Student routes 
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/group-details" element={<GroupDetails />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        //filesharing
       <Route path="/upload-file" element={<UploadFile />} />
       <Route path="/shared-files" element={<SharedFiles />} />
       <Route path="/file-card" element={<FileCard />} />
       <Route path="/file-preview" element={<FilePreview />} />

       //chat routes
       <Route path="/group-chat" element={<GroupChat />} />
       <Route path="/single-chat" element={<SingleChat />} />


      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;