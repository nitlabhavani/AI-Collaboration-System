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

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features/>} />

        <Route path="*" element={<NotFound />} />


        {/* <Route path="/guide-dashboard" element={<GuideDashboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/guide-dashboard" element={<GuideDashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/group-management" element={<GroupManagement />} />
        <Route path="/member-details" element={<MemberDetails />} />
        <Route path="/team-analytics" element={<TeamAnalytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/ai-summary" element={<AISummary />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;