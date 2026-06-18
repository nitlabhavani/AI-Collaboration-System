import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/common/Home";
import NotFound from "../../pages/common/NotFound";
import GuideDashboard from "../../pages/guide/GuideDashboard";
import Login from "../../pages/auth/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} /> */}


        {/* <Route path="/guide-dashboard" element={<GuideDashboard />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;