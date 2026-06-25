import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/common/Home";
import About from "../../pages/common/About";
import Features from "../../pages/common/Features";
import NotFound from "../../pages/common/NotFound";

import Login from "../../pages/auth/Login";
import Alerts from "../../pages/guide/Alerts";
import TeamAnalytics from "../../pages/guide/TeamAnalytics";



import StudentDashboard from "../../pages/student/StudentDashboard";
import Groups from "../../pages/student/Groups";
import GroupDetails from "../../pages/student/GroupDetails";  
import Performance from "../../pages/student/Performance";
import Notifications from "../../pages/student/Notifications";
import Profile from "../../pages/student/Profile";
import Settings from "../../pages/student/Settings";

import UploadFile from "../../assets/Components/fileSharing/UploadFile";
import SharedFiles from "../../assets/Components/fileSharing/SharedFiles";
import FileCard from "../../assets/Components/fileSharing/FileCard";
import FilePreview from "../../assets/Components/fileSharing/FilePreview";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features/>} />
        <Route path="*" element={<NotFound />} />


        
        <Route path="/login" element={<Login />} />

        

        // Student routes 
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/group-details" element={<GroupDetails />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        //file sharing
        <Route path="/upload-file" element={<UploadFile />} />
        <Route path="/shared-files" element={<SharedFiles />} />
        <Route path="/file-card" element={<FileCard />} />
        <Route path="/file-preview" element={<FilePreview />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;